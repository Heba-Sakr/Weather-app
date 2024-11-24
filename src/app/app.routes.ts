import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location/location-list.component';
import { WeatherDetailsComponent } from './components/weather/weather-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LocationListComponent },
  { path: 'weather/:name', component: WeatherDetailsComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to the default view
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}