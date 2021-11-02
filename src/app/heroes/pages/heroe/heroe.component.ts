import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  id!: string;
  heroe!: Hero;

  constructor(private activatedRoute: ActivatedRoute, private hereosService: HeroesService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      console.log(this.id);
    });
    this.hereosService.getHeroe(this.id!).subscribe(res => this.heroe = res)

  }
  regresar(): void {
    this.router.navigate(['/heroes/listado']);

  }


}