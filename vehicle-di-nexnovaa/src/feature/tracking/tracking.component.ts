import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MapViewComponent } from "../../ui/map-view/map-view.component";

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, MapViewComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackingComponent {
  private readonly router = inject(Router);

  // shipments = [
  //   {
  //     id: 'SHP-12345',
  //     route: 'Chicago, IL to New York, NY',
  //     status: 'In Transit',
  //     statusClass: 'in-transit',
  //     delivery: 'Aug 15, 2025',
  //     location: 'Cleveland, OH',
  //   },
  //   {
  //     id: 'SHP-67890',
  //     route: 'Los Angeles, CA to Phoenix, AZ',
  //     status: 'Delivered',
  //     statusClass: 'delivered',
  //     delivery: 'Aug 12, 2025',
  //     location: 'Phoenix, AZ',
  //   },
  //   {
  //     id: 'SHP-54321',
  //     route: 'Seattle, WA to Portland, OR',
  //     status: 'Pending',
  //     statusClass: 'pending',
  //     delivery: 'Aug 18, 2025',
  //     location: 'Seattle, WA',
  //   },
  //   {
  //     id: 'SHP-24680',
  //     route: 'Miami, FL to Atlanta, GA',
  //     status: 'Delayed',
  //     statusClass: 'delayed',
  //     delivery: 'Aug 17, 2025',
  //     location: 'Jacksonville, FL',
  //   },
  //   {
  //     id: 'SHP-13579',
  //     route: 'Boston, MA to Philadelphia, PA',
  //     status: 'In Transit',
  //     statusClass: 'in-transit',
  //     delivery: 'Aug 16, 2025',
  //     location: 'New Haven, CT',
  //   },
  // ];

  currentVehicle: any = null;

  shipments = [
    {
      id: 'SHP-12345',
      route: 'Chicago, IL to New York, NY',
      status: 'In Transit',
      statusClass: 'in-transit',
      delivery: 'Aug 15, 2025',
      location: 'Cleveland, OH',
      mapOriginAndDestination: {
        originLat: 41.8781,  // Chicago
        originLng: -87.6298,
        destinationLat: 41.4993,  // Cleveland
        destinationLng: -81.6944
      }
    },
    {
      id: 'SHP-67890',
      route: 'Los Angeles, CA to Phoenix, AZ',
      status: 'Delivered',
      statusClass: 'delivered',
      delivery: 'Aug 12, 2025',
      location: 'Phoenix, AZ',
      mapOriginAndDestination: {
        originLat: 34.0522,  // Los Angeles
        originLng: -118.2437,
        destinationLat: 33.4484,  // Phoenix
        destinationLng: -112.0740
      }
    },
    {
      id: 'SHP-54321',
      route: 'Seattle, WA to Portland, OR',
      status: 'Pending',
      statusClass: 'pending',
      delivery: 'Aug 18, 2025',
      location: 'Seattle, WA',
      mapOriginAndDestination: {
        originLat: 47.6062,  // Seattle
        originLng: -122.3321,
        destinationLat: 47.6062,  // Still in Seattle
        destinationLng: -122.3321
      }
    },
    {
      id: 'SHP-24680',
      route: 'Miami, FL to Atlanta, GA',
      status: 'Delayed',
      statusClass: 'delayed',
      delivery: 'Aug 17, 2025',
      location: 'Jacksonville, FL',
      mapOriginAndDestination: {
        originLat: 25.7617,  // Miami
        originLng: -80.1918,
        destinationLat: 30.3322,  // Jacksonville
        destinationLng: -81.6557
      }
    },
    {
      id: 'SHP-13579',
      route: 'Boston, MA to Philadelphia, PA',
      status: 'In Transit',
      statusClass: 'in-transit',
      delivery: 'Aug 16, 2025',
      location: 'New Haven, CT',
      mapOriginAndDestination: {
        originLat: 42.3601,  // Boston
        originLng: -71.0589,
        destinationLat: 41.3083,  // New Haven
        destinationLng: -72.9279
      }
    }
  ];
  openLocation(currentVehicle: any) {
    this.currentVehicle = currentVehicle;
    console.log('current vehicle', currentVehicle);
  }
}
