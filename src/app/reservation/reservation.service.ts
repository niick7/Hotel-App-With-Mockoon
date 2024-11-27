import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiURL = 'http://localhost:3000';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  // CRUD
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> | undefined {
    return this.http.get<Reservation>(this.apiURL + '/reservations/' + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiURL + '/reservations', reservation);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiURL + '/reservations/' + id, updatedReservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiURL + '/reservations/' + id);
  }
}
