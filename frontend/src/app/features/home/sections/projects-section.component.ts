import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../shared/section-heading/section-heading.component';
import { TagComponent } from '../../../shared/tag/tag.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, TagComponent],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects = inject(PortfolioService).projects;
}
