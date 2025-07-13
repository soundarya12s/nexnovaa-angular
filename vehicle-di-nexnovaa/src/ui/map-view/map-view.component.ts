import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
})
export class MapViewComponent implements OnInit {
  @Input() mapOriginAndDestination: {
    originLat: number;
    originLng: number;
    destinationLat: number;
    destinationLng: number;
  } = {
      originLat: 41.8781,  // Chicago
      originLng: -87.6298,
      destinationLat: 41.4993,  // Cleveland
      destinationLng: -81.6944
    };

  center!: google.maps.LatLngLiteral;
  vehiclePosition!: google.maps.LatLngLiteral;
  routePath: google.maps.LatLngLiteral[] = [];
  index = 0;
  zoom = 13;
  private intervalId: any;
  zoomInterval: any;

  vehicleMarkerOptions: google.maps.MarkerOptions = {
    icon: {
      url: 'assets/truck-icon.png',
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20)
    }
  };

  ngOnInit() {
    this.mapIterations();
  }

  // ngOnChanges() {
  //   if (this.mapOriginAndDestination) {
  //     console.log('runnning onchanges coords');
  //     this.mapIterations();
  //   }
  // }
  mapIterations() {
    // clearInterval(this.intervalId);
    // clearInterval(this.zoomInterval);
    try {
      setTimeout(() => {
        console.log('Executing map component');

        const origin = {
          lat: this.mapOriginAndDestination.originLat,
          lng: this.mapOriginAndDestination.originLng,
        };

        const destination = {
          lat: this.mapOriginAndDestination.destinationLat,
          lng: this.mapOriginAndDestination.destinationLng,
        };

        // Center and start vehicle at origin
        this.center = origin;
        this.vehiclePosition = origin;

        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (
              status === google.maps.DirectionsStatus.OK &&
              result?.routes?.length
            ) {
              const route = result.routes[0].overview_path;
              this.routePath = route.map((point) => ({
                lat: point.lat(),
                lng: point.lng(),
              }));

              this.index = 0;
              this.intervalId = setInterval(() => {
                if (this.index < this.routePath.length - 1) {
                  this.updateVehiclePosition();
                } else {
                  clearInterval(this.intervalId);
                }
              }, 1000);
            } else {
              console.error('Directions request failed:', status);
            }
          }
        );
      }, 200);
    } catch (e) {
      console.warn(e);
    }
  }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  //   clearInterval(this.zoomInterval);
  // }

  updateVehiclePosition() {
    const current = this.routePath[this.index];
    const next = this.routePath[this.index + 1];
    if (next) {
      const angle = this.calculateBearing(current, next);
      const baseIcon = this.vehicleMarkerOptions.icon || {};
      this.vehicleMarkerOptions = {
        ...this.vehicleMarkerOptions,
        icon: {
          url: 'assets/truck-icon.png',
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 20),
          rotation: angle
        } as google.maps.Icon
      };
    }

    this.vehiclePosition = current;
    this.index++;

    console.log('Vehicle Position:', this.vehiclePosition); // Log to track position
  }

  zoomToMarker() {
    this.zoomInterval = setInterval(() => {
      this.center = this.vehiclePosition;
      this.zoom = 18;
    }, 300);
    console.log('Zooming to marker:', this.vehiclePosition); // Log to track zoom

  }

  destroyZoom() {
    clearInterval(this.zoomInterval);
  }

  calculateBearing(start: google.maps.LatLngLiteral, end: google.maps.LatLngLiteral): number {
    const lat1 = (start.lat * Math.PI) / 180;
    const lat2 = (end.lat * Math.PI) / 180;
    const lngDiff = ((end.lng - start.lng) * Math.PI) / 180;

    const y = Math.sin(lngDiff) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(lngDiff);
    const angle = Math.atan2(y, x);
    return ((angle * 180) / Math.PI + 360) % 360;
  }
}
