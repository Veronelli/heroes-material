import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Hero[] = [];
  heroeSeleccionado!: Hero;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.heroesService.getHeroesByLetter(this.termino).subscribe(value => this.heroes = value);

  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      return
    }


    const heroe: Hero = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroe(heroe.id!).subscribe(res => this.heroeSeleccionado = res);
  }

}
