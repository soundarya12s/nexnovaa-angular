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
export class DriversVehiclesComponent {
  drivers = [
    { name: 'John Smith', email: 'john.smith@example.com', phone: '(555) 123-4567', license: 'DL-123456', expiry: 'May 15, 2026', status: 'Active', location: 'Chicago, IL' },
    { name: 'Bob Wilson', email: 'bob.wilson@example.com', phone: '(555) 345-6789', license: 'DL-789012', expiry: 'Dec 10, 2025', status: 'On Leave', location: 'Los Angeles, CA' },
    { name: 'Michael Brown', email: 'michael.brown@example.com', phone: '(555) 876-5432', license: 'DL-567890', expiry: 'Jan 18, 2026', status: 'Inactive', location: 'Denver, CO' }
  ];
}
