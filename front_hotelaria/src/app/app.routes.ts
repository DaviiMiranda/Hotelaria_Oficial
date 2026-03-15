import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Accommodations } from './pages/accommodations/accommodations';
import { Gastronomy } from './pages/gastronomy/gastronomy';
import { Wellness } from './pages/wellness/wellness';
import { Events } from './pages/events/events';
import { Experiences } from './pages/experiences/experiences';
import { Contact } from './pages/contact/contact';
import { Booking } from './pages/booking/booking';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'accommodations', component: Accommodations },
    { path: 'gastronomy', component: Gastronomy },
    { path: 'wellness', component: Wellness },
    { path: 'events', component: Events },
    { path: 'experiences', component: Experiences },
    { path: 'contact', component: Contact },
    { path: 'booking', component: Booking },
    { path: 'dashboard', component: Dashboard },
    { path: '**', redirectTo: '' }
];
