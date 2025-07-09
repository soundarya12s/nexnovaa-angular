import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackingComponent {
  private readonly router = inject(Router);
  
  shipments = [
    {
      id: 'SHP-12345',
      route: 'Chicago, IL to New York, NY',
      status: 'In Transit',
      statusClass: 'in-transit',
      delivery: 'Aug 15, 2025',
      location: 'Cleveland, OH',
    },
    {
      id: 'SHP-67890',
      route: 'Los Angeles, CA to Phoenix, AZ',
      status: 'Delivered',
      statusClass: 'delivered',
      delivery: 'Aug 12, 2025',
      location: 'Phoenix, AZ',
    },
    {
      id: 'SHP-54321',
      route: 'Seattle, WA to Portland, OR',
      status: 'Pending',
      statusClass: 'pending',
      delivery: 'Aug 18, 2025',
      location: 'Seattle, WA',
    },
    {
      id: 'SHP-24680',
      route: 'Miami, FL to Atlanta, GA',
      status: 'Delayed',
      statusClass: 'delayed',
      delivery: 'Aug 17, 2025',
      location: 'Jacksonville, FL',
    },
    {
      id: 'SHP-13579',
      route: 'Boston, MA to Philadelphia, PA',
      status: 'In Transit',
      statusClass: 'in-transit',
      delivery: 'Aug 16, 2025',
      location: 'New Haven, CT',
    },
  ];

  openLocation(locationId: string) {
    console.log('Opening location:', locationId);
    this.router.navigate(['/maps']);
  }
}
