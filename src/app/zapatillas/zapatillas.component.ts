import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatilla.service'



@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit {
  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor(
    private _zapatillaService : ZapatillasService
  ) {
    this.color = 'blue'
    this.marcas = new Array();

  }

  ngOnInit() {
    this.zapatillas  = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto());
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

  getMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    if (this.marcas.indexOf(this.miMarca) < 0) {
      this.marcas.push(this.miMarca)
    } else {
      alert('La marca ' + this.miMarca + ' ya existe!!')
    }
  }

  deleteMarca(index) {
    this.marcas.splice(index, 1);
  }

  onBlur() {
    alert('Has abandonado el input');
  }

  pushEnter() {
    alert('Has pulsado la tecla enter!!');
  }
}
