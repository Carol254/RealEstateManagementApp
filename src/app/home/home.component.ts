import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            HousingLocationComponent],
  template: `
     <section>
    <form>
      <input type="text" placeholder="Filter by city...">
      <button class="primary" type="button">Search Here</button>
    </form>
  </section>

  <section class="results">
    <app-housing-location 
    *ngFor="let housingLocation of housingLocationList"
    [housingLocation]="housingLocation"> </app-housing-location>
  </section>
   
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService:HousingService = inject(HousingService);
  filteredLocationList: Housinglocation[] = [];

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
}
