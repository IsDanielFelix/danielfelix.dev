import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  private readonly portfolio = inject(PortfolioService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  protected readonly profile = this.portfolio.profile;
  protected readonly navigation = this.portfolio.navigation;
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('inicio');

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.closeMenu();
        setTimeout(() => this.updateActive());
      });

    afterNextRender(() => {
      const update = () => this.updateActive();
      update();
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
      });
    });
  }

  @HostListener('document:keydown.escape')
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected isActive(fragment: string): boolean {
    return this.active() === fragment;
  }

  private updateActive(): void {
    const onProject = window.location.pathname.startsWith('/proyectos');
    const present = this.navigation.filter((item) => document.getElementById(item.fragment));

    if (present.length === 0) {
      this.active.set(onProject ? 'proyectos' : '');
      return;
    }

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    if (nearBottom) {
      this.active.set('contacto');
      return;
    }

    const marker = 88;
    let current = present[0].fragment;
    for (const item of present) {
      const element = document.getElementById(item.fragment);
      if (element && element.getBoundingClientRect().top <= marker) {
        current = item.fragment;
      }
    }
    this.active.set(current);
  }
}
