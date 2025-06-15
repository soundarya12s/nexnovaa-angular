import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-actions.component.html',
  styleUrl: './vehicle-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleActionsComponent {}
