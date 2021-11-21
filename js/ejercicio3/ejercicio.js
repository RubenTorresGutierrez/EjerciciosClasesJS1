/**
*   @file ejercicio3
*   @description Crear una clase herencia de la anterior capaz de crear el volúmen del cilindro.
*       a. Constructor.prototype.propiedad = valor;
*       b. rectangulo.prototype.metodo = get_metodo;
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

// IMPORTACIONES
import {Circulo} from './circulo.js';

class Cilindro extends Circulo{

    constructor(r, h){

        super(r);
        this.h = h;

    }

    calcularVolumen(){

        return this.calcularArea() * this.h;
        
    }

}

let app = new Cilindro(2, 20);

console.log(`El área del circulo es ${app.calcularArea()}`);
console.log(`El volumen del cilindro es ${app.calcularVolumen()}`);