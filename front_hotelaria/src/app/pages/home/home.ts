import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  @ViewChild('heroVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.videoElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.play().catch(error => {
        console.warn('Auto-play was blocked. Waiting for user interaction or retrying...', error);
      });
    }
  }
}
