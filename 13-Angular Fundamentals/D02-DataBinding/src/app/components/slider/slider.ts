import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  images = ['1.jpg', '2.jpg', '3.jpg'];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
