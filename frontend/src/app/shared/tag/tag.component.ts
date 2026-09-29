import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  templateUrl: './tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  readonly tone = input<'light' | 'dark'>('light');
}
