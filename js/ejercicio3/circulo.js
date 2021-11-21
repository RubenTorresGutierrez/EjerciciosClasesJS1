/**
*   @file cilindro | ejercicio3
*   @description Clase Cilindro
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

export class Circulo{

    constructor(r){

        this.r = r;

    }

    calcularArea(){

        return 2 * Math.PI * this.r;
        
    }

}