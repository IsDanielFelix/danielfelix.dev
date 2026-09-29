import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-project-visual',
  standalone: true,
  templateUrl: './project-visual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectVisualComponent {
  readonly mark = input.required<string>();
  readonly label = input.required<string>();
}
