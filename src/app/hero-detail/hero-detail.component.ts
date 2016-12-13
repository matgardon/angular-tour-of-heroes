import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../common/domain/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //#region properties

  @Input()
  public hero: Hero;

  //#endregion

  constructor() { }

  ngOnInit() {
  }

}
