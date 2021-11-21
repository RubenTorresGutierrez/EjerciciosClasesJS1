/**
*   @file ejercicio2
*   @description Crear una clase para calcular el área de un circulo.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Circulo{

    constructor(r){
        this.r = r;
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.calcularArea();
    }
    calcularArea(){
        console.log(`El resultado es ${2 * Math.PI * this.r}`);
    }

}

let app = new Circulo(4);