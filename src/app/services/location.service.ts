import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  private baseUrl = 'http://localhost:3000/locations'; // Ensure the base URL is correct

  constructor(private http: HttpClient) {}

  // Fetch all saved locations
  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Save a new location
  saveLocation(location: { name: string}): Observable<any> {
    return this.http.post<any>(this.baseUrl, location);
  }
  
  // Delete a location
  deleteLocation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
