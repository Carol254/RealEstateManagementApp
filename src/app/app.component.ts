import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HomeComponent],
  template: `<main>
                <header class="brand-name">
               <img src="/assets/house-fill.svg">
                </header>

                <section class="content">
                  <app-home></app-home>
                </section>
            </main>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realEstateAngularApp';
}
