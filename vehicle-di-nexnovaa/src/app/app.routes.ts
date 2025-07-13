import { Routes } from '@angular/router';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { ScanQrComponent } from '../ui/scan-qr/scan-qr.component';
import { WebCamComponent } from '../ui/web-cam/web-cam.component';
import { TrackingComponent } from '../feature/tracking/tracking.component';
import { DockAllocationComponent } from '../feature/dock-allocation/dock-allocation.component';
import { ShipmentsComponent } from '../feature/shipments/shipments.component';
import { OrdersComponent } from '../feature/orders/orders.component';
import { DriversVehiclesComponent } from '../feature/drivers-vehicles/drivers-vehicles.component';
import { VehicleActionsComponent } from '../feature/vehicle-actions/vehicle-actions.component';
import { MapViewComponent } from '../ui/map-view/map-view.component';
import { WebcamComponent } from 'ngx-webcam';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'dock-allocation',
    component: DockAllocationComponent,
  },
  {
    path: 'scan-qr',
    component: ScanQrComponent,
  },
  {
    path: 'web-cam',
    component: WebCamComponent,
  },
  {
    path: 'maps',
    component: MapViewComponent,
  },
  {
    path: 'tracking',
    component: TrackingComponent,
  },
  {
    path: 'shipments',
    component: ShipmentsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'drivers-and-vehicles',
    component: DriversVehiclesComponent,
  },
  {
    path: 'vehicle-actions',
    component: VehicleActionsComponent,
  },
];
