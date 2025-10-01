import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: string;
  number: string;
  type: string;
  price: number;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) { }
  
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  getRoomById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  updateRoom(id: string, available: boolean): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${id}`, { available });
  }

  deleteRoom(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
