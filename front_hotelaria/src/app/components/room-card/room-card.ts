import { Component, input, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface RoomType {
  name: string;
  size: string;
  price?: string;
  description: string;
  images: string[];
  details: string[];
}

@Component({
  selector: 'app-room-card',
  imports: [RouterLink],
  templateUrl: './room-card.html',
  styleUrl: './room-card.css'
})
export class RoomCard {
  room = input.required<RoomType>();

  currentSlide = signal(0);

  totalSlides = computed(() => this.room().images.length);

  currentImage = computed(() => this.room().images[this.currentSlide()]);

  prevSlide() {
    this.currentSlide.update(i => i === 0 ? this.totalSlides() - 1 : i - 1);
  }

  nextSlide() {
    this.currentSlide.update(i => i === this.totalSlides() - 1 ? 0 : i + 1);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
