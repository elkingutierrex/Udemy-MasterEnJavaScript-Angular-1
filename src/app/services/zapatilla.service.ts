import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'

@Injectable()
export class ZapatillasService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
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

  getTexto(){
    return "Hola mundo desde service"
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
