import { WeatherService } from 'src/app/services/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule], 
  providers: [WeatherService], 
})

export class WeatherDetailsComponent implements OnInit {
  weatherData: any;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute // Inject ActivatedRoute to access route parameters
  ) {}

  ngOnInit(): void {
    // Accessing the 'name' parameter passed in the route
    this.route.params.subscribe(params => {
      const cityName = params['name']; // Use 'name' as per your route configuration
      console.log('City name from route:', cityName); // Debug log
      if (cityName) {
        this.getWeatherForCity(cityName); // Fetch weather for this city
      } else {
        console.error('No city name found in route!');
      }
    });
  }

  getWeatherForCity(cityName: string): void {
    this.weatherService.getWeatherByCity(cityName).subscribe(
      data => {
        this.weatherData = data;
        console.log('Weather data received:', this.weatherData); // Debug log
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}