import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  month = 'July 2025';
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  calendar = [
    { date: 29, active: false },
    { date: 30, active: false },
    ...Array.from({ length: 31 }, (_, i) => ({
      date: i + 1,
      active: true,
      events: i % 6 === 0 ? ['Shift A'] : i % 9 === 0 ? ['Maintenance'] : []
    })),
    { date: 1, active: false },
    { date: 2, active: false },
    { date: 3, active: false },
  ];
}
