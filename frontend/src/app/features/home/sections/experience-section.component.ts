import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './experience-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  protected readonly experience = inject(PortfolioService).experience;
}
