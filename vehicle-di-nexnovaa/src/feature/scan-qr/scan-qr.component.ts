import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-scan-qr',
  standalone: true,
  imports: [CommonModule, QRCodeModule],
  templateUrl: './scan-qr.component.html',
  styleUrl: './scan-qr.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScanQrComponent {
  sessionId = uuidv4();
  qrUrl = `http://localhost:4200/scan/${this.sessionId}`;
}
