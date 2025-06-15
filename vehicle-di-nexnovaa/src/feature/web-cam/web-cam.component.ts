import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-cam',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-cam.component.html',
  styleUrl: './web-cam.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebCamComponent {}
