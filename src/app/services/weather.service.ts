import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // Backend API base URL
  private BACKEND_BASE_URL = 'http://localhost:3000/api/weather'; 

  constructor(private http: HttpClient) {}

  /**
   * Fetch weather data for a city from the backend
   * @param cityName Name of the city to fetch weather for
   * @returns Observable with weather data
   */
  getWeatherByCity(cityName: string): Observable<any> {
    // Make the HTTP GET request to the backend with the city name as part of the URL
    return this.http.get(`${this.BACKEND_BASE_URL}/${cityName}`);
  }
}
