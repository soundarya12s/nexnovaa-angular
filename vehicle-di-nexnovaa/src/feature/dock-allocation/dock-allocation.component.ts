import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dock-allocation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dock-allocation.component.html',
  styleUrl: './dock-allocation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DockAllocationComponent {}
