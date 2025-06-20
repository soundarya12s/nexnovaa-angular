import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drivers-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drivers-vehicles.component.html',
  styleUrl: './drivers-vehicles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversVehiclesComponent {}
