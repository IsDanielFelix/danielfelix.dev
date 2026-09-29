import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './stack-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackSectionComponent {
  protected readonly groups = inject(PortfolioService).skillGroups;
}
