import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  private readonly portfolio = inject(PortfolioService);
  protected readonly profile = this.portfolio.profile;
  protected readonly languages = this.portfolio.languages;
  protected readonly strengths = this.portfolio.strengths;
}
