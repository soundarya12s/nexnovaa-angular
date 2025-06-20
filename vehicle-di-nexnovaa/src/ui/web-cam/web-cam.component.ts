import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-cam',
  standalone: true,
  imports: [CommonModule, WebcamModule],
  templateUrl: './web-cam.component.html',
  styleUrl: './web-cam.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebCamComponent {
  private readonly route = inject(ActivatedRoute);
  private sessionId = this.route.snapshot.paramMap.get('sessionId')!;
  private trigger = new Subject<void>();
  public webcamImage: WebcamImage | null = null;
  public trigger$ = this.trigger.asObservable();
  takeSnapshot() {
    this.trigger.next(); // Tells the <webcam> to take a picture
  }
  handleImage(image: WebcamImage) {
    this.webcamImage = image;
  }
  submit() {
    if (!this.webcamImage) return;

    const payload = {
      sessionId: this.sessionId,
      imageBase64: this.webcamImage.imageAsBase64,
    };

    console.log('image:', payload);
  }
}
