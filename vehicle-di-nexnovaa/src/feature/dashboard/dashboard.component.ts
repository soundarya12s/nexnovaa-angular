import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "../../ui/calendar/calendar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
   summaryCards = [
    { title: 'Active Shipments', value: 28, change: 12 },
    { title: 'Pending Orders', value: 47, change: 5 },
    { title: 'Dock Utilization', value: '85%', change: 3 },
    { title: 'Delayed Shipments', value: 5, change: -2 }
  ];
}
