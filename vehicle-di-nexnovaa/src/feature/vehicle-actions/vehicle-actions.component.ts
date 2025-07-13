import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-actions.component.html',
  styleUrl: './vehicle-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleActionsComponent {
  private readonly router = inject(Router);

  opencamera() {
    console.log('Opening camera for vehicle documentation');
    // Logic to open camera goes here
    this.router.navigate(['/web-cam']);
  }
}
