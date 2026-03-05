import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from './components/header/header';
import { BookingBar } from './components/booking-bar/booking-bar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BookingBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hotelaria_3');
  private router = inject(Router);
  protected isHomePage = signal(true);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // The home page can be '/' or start with '/?' (query params in home)
      this.isHomePage.set(event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/?'));
    });
  }
}