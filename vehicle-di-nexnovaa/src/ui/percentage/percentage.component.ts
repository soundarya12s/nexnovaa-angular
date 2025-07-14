import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-percentage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './percentage.component.html',
  styleUrl: './percentage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PercentageComponent {
  @Input() percentage: number = 0;
}
