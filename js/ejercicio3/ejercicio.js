/*  ejercicio.js
    Ejercicios Clases JS 1 | Ejercicio 2
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

import { Cilindro } from "./cilindro.js";

export class Circulo{

    constructor(r){
        this.r = r;
        window.onload = this.iniciar.bind(this);
    }
    iniciar(){
        this.calcularArea();
        this.cilindro = new Cilindro(4, 20);
        cilindro.prototype.calcularVolumen();
    }
    calcularArea(){
        console.log(`El área del circulo es ${2 * Math.PI * this.r}`);
    }

}

new Circulo(4);