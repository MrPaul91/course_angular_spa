import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  

  //Esto quiere decir que la propiedad heroe puede venir de afuera.
  //Puedo inicializarlo en el constructor o de lo que venga de afuera.
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;


  constructor(private _router: Router) {

    this.heroeSeleccionado = new EventEmitter(); ///Inicializar.

   }

  ngOnInit() {
  }


  verHeroe(){

    console.log("entre aca");
   //Solo para practicar output.
    //this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe',this.index]);

  }


}
