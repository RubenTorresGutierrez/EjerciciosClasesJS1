/*  ejercicio.js
    Ejercicios Clases JS 1 | Ejercicio 3
    Autor: Rubén Torres Gutiérrez <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
    Licencia: GPL v3 o superior
    Año: 2021
*/

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

new Circulo(4);