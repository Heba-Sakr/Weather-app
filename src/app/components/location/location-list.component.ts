import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';

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

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSavedLocations();  // Get saved locations when the component is initialized
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

  viewWeather(cityName: string): void {
    console.log('Navigating to weather page for:', cityName); // Debug log
    this.router.navigate(['/weather', cityName]);
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
