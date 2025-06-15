import { Routes } from '@angular/router';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { ScanQrComponent } from '../feature/scan-qr/scan-qr.component';
import { WebCamComponent } from '../feature/web-cam/web-cam.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [],
  },
  {
    path: 'dock-allocation',
    component: DashboardComponent,
  },
  {
    path: 'scan-qr',
    component: ScanQrComponent,
  },
  {
    path: 'web-cam',
    component: WebCamComponent,
  },
];
