import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core'

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

  public titulo:string;
  public listado:string;

  constructor(){
    this.titulo = "Componente de videojuegos";
    this.listado = 'Listado de los juegos mas populares 2019!!';
    console.log('Se ha cargado el componente: VideojuegoComponent.ts')
  }

  //Es el método cada vez que cargue el componente (de carga inicial)
  ngOnInit(){
    // console.log('OnInit Ejecutado!!');
  }

  //es el método que checkea los cambios
  ngDoCheck(){
    // console.log('DoCheck Ejecutado!');
  }

  //Que se ejecute algo antes de eliminar la instancia de un componente
  ngOnDestroy(){
    // console.log('OnDestroy Ejecutado')
  }

  cambiarTitulo(){
    this.titulo = 'Nuevo titulo del componente'
  }
}
