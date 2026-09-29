import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { TagComponent } from '../../../shared/tag/tag.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, TagComponent],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly portfolio = inject(PortfolioService);
  protected readonly profile = this.portfolio.profile;
  protected readonly highlights = this.portfolio.highlights;
  protected readonly primaryStack = this.portfolio.primaryStack;
}
