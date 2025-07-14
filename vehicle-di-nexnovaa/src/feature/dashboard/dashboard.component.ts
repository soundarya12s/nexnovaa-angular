import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from "../../ui/calendar/calendar.component";
import { Observable, of } from 'rxjs';

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

  recentActivity = [
    {
      type: 'Shipment',
      description: 'Shipment #12345 delayed',
      timestamp: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
    },
    {
      type: 'Order',
      description: 'New order placed by customer #67890',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      type: 'Dock',
      description: 'Dock #3 allocated for shipment #12345',
      timestamp: new Date(Date.now() - 45 * 1000) // 45 seconds ago
    },
    {
      type: 'Shipment',
      description: 'Shipment #67890 arrived at dock',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    },
    {
      type: 'Order',
      description: 'Order #54321 completed',
      timestamp: new Date(Date.now() - 10 * 1000) // 10 seconds ago
    }
  ];

  onDateChange(date: Date) {
    console.log('Selected date:', date);
    // Use this to filter dock allocations
  }

  calculateTimeAgo(date: Date): Observable<string> {
    return of(this.formatTimeAgo(date));
  }

  private formatTimeAgo(date: Date): string {
    const diffTime = Math.abs(Date.now() - date.getTime());
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} mins ago`;
    } else if (seconds > 0) {
      return `${seconds} secs ago`;
    } else {
      return 'Just now';
    }
  }
}
