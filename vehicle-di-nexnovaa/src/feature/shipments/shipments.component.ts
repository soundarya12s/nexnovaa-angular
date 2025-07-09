import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipments.component.html',
  styleUrl: './shipments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShipmentsComponent {
  private readonly router = inject(Router);

  shipments = [
    { customer: 'Acme Corp', route: 'Chicago to NY', dates: 'Aug 10 - Aug 15', status: 'In Transit', details: '12 items, 450 kg' },
    { customer: 'TechSolutions', route: 'LA to Phoenix', dates: 'Aug 8 - Aug 12', status: 'Delivered', details: '8 items, 320 kg' }
  ];

  openLocation(locationId: string) {
    console.log('Opening location:', locationId);
    this.router.navigate(['/tracking']);
  }
}
