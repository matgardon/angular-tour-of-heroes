import { Component } from '@angular/core';
import { Hero } from './common/domain/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tour of heroes app';

  hero: Hero = {
    id: 1,
    name : 'Windstorm'
  };
}
