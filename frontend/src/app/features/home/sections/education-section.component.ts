import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './education-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent {
  protected readonly education = inject(PortfolioService).education;
}
