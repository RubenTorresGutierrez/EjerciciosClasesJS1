/*  cilindro.js
    Ejercicios Clases JS 1 | Ejercicio 2
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

//Importaciones
import { Circulo } from './ejercicio.js'

export class Cilindro extends Circulo{

    constructor(r, h){
        super(r);
        this.h = h;
    }
    calcularVolumen(){
        console.log(`El volumen del cilindro es ${Math.PI * super.r * 2 * this.h}`);
    }

}