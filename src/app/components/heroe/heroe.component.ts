import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
   

  private heroe: Heroe;

  constructor( private activatedroute: ActivatedRoute, private _heroeService: HeroesService) {

  console.log("Hola, estamos en heroes");
    //Esta pendiente de los cambios, es una promesa. Esta pendiente de los cambios.
    this.activatedroute.params.subscribe(
      params => {

        this.heroe = this._heroeService.getHeroe(params['id']);
         
      }
    );
  }

  ngOnInit() {
  }

}
