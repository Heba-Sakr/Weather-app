import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule], 
  providers: [LocationService], 
})
export class LocationListComponent {
  newLocation: string = '';
  locations: any[] = [];
  private backendBaseUrl = 'http://localhost:3000/locations';
  latestCityWeather: any = null; // Holds weather data for the latest city


  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getSavedLocations();  // Get saved locations when the component is initialized
    this.getLastLocation(); // Fetch weather for the latest city

  }
  getLastLocation(): void {
    this.http.get(`${this.backendBaseUrl}/latest`).subscribe(
      (latestLocation: any) => {
        if (latestLocation?.name) {
          this.weatherService.getWeatherByCity(latestLocation.name).subscribe(
            (weatherData) => {
              this.latestCityWeather = weatherData; // Store weather data
            },
            (error) => {
              console.error('Error fetching weather for latest city:', error);
            }
          );
        } else {
          console.log('No latest location found');
        }
      },
      (error) => {
        console.error('Error fetching latest location:', error);
      }
    );
  }

  addLocation(): void {
    if (this.newLocation.trim()) {
      const location = { name: this.newLocation };  // Assuming PLZ is same as the name for simplicity
      this.locationService.saveLocation(location).subscribe(() => {
        this.newLocation = '';  // Clear input
        this.getSavedLocations(); // Reload the locations list
      });
    }
  }

   // Navigate to weather details for a selected location
   viewWeather(cityName: string): void {
    window.location.href = `/weather/${cityName}`;
  }
  
  getSavedLocations(): void {
    this.locationService.getLocations().subscribe((locations) => {
      //console.log('Fetched locations:', locations); // Log to check data
      this.locations = locations;
    });
  }

  deleteLocation(locationId: string): void {
    this.locationService.deleteLocation(locationId).subscribe(() => {
      this.getSavedLocations(); // Reload the list after deletion
    });
  }

  
}
