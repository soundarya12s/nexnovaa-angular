import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentageComponent } from "../../ui/percentage/percentage.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-vehicles',
  standalone: true,
  imports: [CommonModule, PercentageComponent],
  templateUrl: './drivers-vehicles.component.html',
  styleUrl: './drivers-vehicles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversVehiclesComponent {
  private readonly route = inject(Router);
  public activeTab = signal(0);

  selectTab(index: number) {
    try {
      this.activeTab.set(index);
    } catch (e) {
      console.warn(e);
    }
  }

   goToTarget(): void {
    this.route.navigate(['/maps']);
  }

  drivers = [
    { name: 'John Smith', email: 'john.smith@example.com', phone: '(555) 123-4567', license: 'DL-123456', expiry: 'May 15, 2026', status: 'Active', location: 'Chicago, IL' },
    { name: 'Bob Wilson', email: 'bob.wilson@example.com', phone: '(555) 345-6789', license: 'DL-789012', expiry: 'Dec 10, 2025', status: 'On Leave', location: 'Los Angeles, CA' },
    { name: 'Michael Brown', email: 'michael.brown@example.com', phone: '(555) 876-5432', license: 'DL-567890', expiry: 'Jan 18, 2026', status: 'Inactive', location: 'Denver, CO' }
  ];

  vehicles = [
    { name: 'Truck 1', type: 'Truck', registration: 'TRK-1234', status: 'Active', fuelLevel: 75, lastService: '2023-10-01' },
    { name: 'Van 2', type: 'Van', registration: 'VAN-5678', status: 'Maintenance Required', fuelLevel: 50, lastService: '2023-09-15' },
    { name: 'Car 3', type: 'Car', registration: 'CAR-9012', status: 'Active', fuelLevel: 80, lastService: '2023-10-05' }
  ]
}
