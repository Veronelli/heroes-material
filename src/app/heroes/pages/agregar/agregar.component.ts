import { Component, OnInit } from "@angular/core";
import { Hero, Publisher } from "../../interfaces/heroes.interface";
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "../../components/confirmar/confirmar.component";

@Component({
  selector: 'app-agregar-component',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
  heroe: Hero = {
    id: '',
    superhero: '',
    characters: '',
    alter_ego: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',

  }

  constructor(private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) return
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroe(id)))
      .subscribe(heroe => this.heroe = heroe);

  }

  mostrarSnackbar(mensaje: string) {
    this._snackBar.open(mensaje, 'Ok!', {
      duration: 2500

    })
  }

  guardar(): void {
    if (this.heroe.id) {

      this.heroeService.actualizarHeroe(this.heroe).subscribe(res => {
        this.mostrarSnackbar("Registro Actualizado");
      });
      return;
    }
    this.heroeService.agregarHeroe(this.heroe).subscribe(res => this.mostrarSnackbar("Registro Creado"));
  }

  borrar(): void {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this.heroeService.borrarHeroe(this.heroe.id!).subscribe(res => {
          this.router.navigate(['/heroes']);
        });

      }
    }
    )

  }
} 