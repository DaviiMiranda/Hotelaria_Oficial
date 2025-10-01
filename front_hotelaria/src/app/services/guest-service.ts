import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Guest {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  dateIn: Date;
  dateOut: Date;
  room: number;
}

@Injectable({
  providedIn: 'root'
})

export class guestService {

  private apiUrl = 'http://localhost:8080/api/guests';

  constructor(private http: HttpClient) { }
  
  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.apiUrl);
  }

  getGuestById(id: number): Observable<Guest> {
    return this.http.get<Guest>(`${this.apiUrl}/${id}`);
  }

  addGuest(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(this.apiUrl, guest);
  }

  updateGuest(id: number, guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(`${this.apiUrl}/${id}`, guest);
  }

  deleteGuest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
