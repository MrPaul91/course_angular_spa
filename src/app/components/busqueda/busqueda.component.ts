import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
   
  heroes:Heroe[] = []; //Inicializado un arreglo vacio
  
  termino: string;

  constructor(private activatedroute: ActivatedRoute, private heroesService: HeroesService) { }
  
  ngOnInit() {

    this.activatedroute.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this.heroesService.buscarHeroe(this.termino);

        console.log(this.heroes);
      }
    );

  }

}
