/**
*   @file ejercicio1
*   @description Crear una clase que sea capaz de calcular el área del rectángulo.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Rectangulo{

    constructor(b, h){

        this.b = b;
        this.h = h;

    }

    calcularArea(){

        return this.b * this.h;

    }

}

let app = new Rectangulo(2, 4);
alert(app.calcularArea());