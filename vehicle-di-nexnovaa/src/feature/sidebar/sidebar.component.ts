import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public navigationList = [
    {
      name: 'Dashboard',
      icon: 'columns-gap',
    },
    {
      name: 'Dock Allocation',
      icon: 'calendar4-event',
    },
    {
      name: 'Tracking',
      icon: 'geo-alt',
    },
    {
      name: 'Shipments',
      icon: 'truck',
    },
    {
      name: 'Orders',
      icon: 'box-seam',
    },
    {
      name: 'Drivers & Vehicles',
      icon: 'people',
    },
    {
      name: 'Vehicle Actions',
      icon: 'camera',
    },
  ];
}
