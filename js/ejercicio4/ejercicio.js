/**
*   @file ejercicio2
*   @description Crea una clase alumno cuyos atributos sean:
*       - Nombre Completo.
*       - Curso actual.
*       - Nota1
*       - Nota2
*       - Nota3
*   Crea los métodos necesarios para mostrar por pantalla el nombre, el curso, las notas y la media de todas las notas.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Alumno{

    constructor(nombre, curso, nota1, nota2, nota3){

        this.nombre = nombre;
        this.curso = curso;
        this.notas = [
            nota1,
            nota2,
            nota3
        ];

    }

    mostrar(){

        alert(`Hola me llamo ${this.nombre}, voy a ${this.curso} y tengo una media de ${this.media()}`);

    }

    media(){

        return this.notas.reduce((x, y) => x + y) / this.notas.length

    }

}

let app = new Alumno('Ruben', '2DAW', 10, 9, 10);
app.mostrar();
