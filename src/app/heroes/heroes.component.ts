import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*Globale variable hero mit einem Hero Objekt initialisieren und das Objekt
  instanziiert*/
  hero: Hero = {id: 1, name: 'Windstorm'};

  /*Globale Variable heroes mit mit der mock-heroes liste initialisiert*/
  heroes = HEROES;

 /*Globale Variable selectedHero mit dem Tye Hero deklariert*/
  selectedHero: Hero;

  /*onSelect Methode befüllt beim ausführen die globale Variable selectedHero
   mit dem ausgewählten hero Objekt*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
