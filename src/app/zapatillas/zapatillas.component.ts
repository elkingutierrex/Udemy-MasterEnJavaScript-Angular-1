import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor() {
    this.color = 'blue'
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Mikewey', 'Rebook', 'Blanco', 190, true),
      new Zapatilla('Rebook Classic', 'Rebook', 'Blanco', 80, true),
      new Zapatilla('Perola', 'Perola', 'Blanco', 70, false),
      new Zapatilla('Firulais', 'Ags', 'Blanco', 380, true),
      new Zapatilla('Rebook perola', 'Rebook', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
      new Zapatilla('Las Arachas', 'Mike', 'Gris', 108, false)
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca)
        console.log(index);
      }
    })
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.miMarca);
  }

  addMarca(){
    if(this.marcas.indexOf(this.miMarca)< 0){
        this.marcas.push(this.miMarca)
      }else{
        alert('La marca '+ this.miMarca+ ' ya existe!!')
      }
  }

  deleteMarca(index){
     this.marcas.splice(index,1);
  }

  onBlur(){
    alert('Has abandonado el input');
  }

  pushEnter(){
    alert('Has pulsado la tecla enter!!');
  }
}
