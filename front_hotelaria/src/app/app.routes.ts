import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Guests } from './pages/guests/guests';
import { Rooms } from './pages/rooms/rooms';
import { Payment } from './pages/payment/payment';
export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: Register },
    { path: 'guests', component: Guests },
    { path: 'rooms', component: Rooms },
    { path: 'payment', component: Payment } 
];
