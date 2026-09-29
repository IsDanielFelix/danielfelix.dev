import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../core/models/portfolio.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { TagComponent } from '../../shared/tag/tag.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, TagComponent],
  templateUrl: './project-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  private readonly portfolio = inject(PortfolioService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly profileName = this.portfolio.profile.name;
  protected readonly project = signal<Project | undefined>(undefined);
  protected readonly others = computed(() =>
    this.portfolio.projects.filter((item) => item.slug !== this.project()?.slug),
  );

  constructor() {
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((params) => {
        const found = this.portfolio.getProject(params.get('slug') ?? '');
        this.project.set(found);
        this.title.setTitle(found ? `${found.name} · ${this.profileName}` : 'Proyecto no encontrado');
        if (found) {
          this.meta.updateTag({ name: 'description', content: found.summary });
        }
      });
  }
}
