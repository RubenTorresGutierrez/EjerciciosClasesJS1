/**
*   @file ejercicio6
*   @description Definir una clase PERSONA que contenga información de propósito
*   general común a todas las personas (nombre, dirección, fecha de
*   nacimiento, sexo). Diseñar una jerarquía de clases que contemple las
*   siguientes clases: empleado y directivo.
*   Escribir un programa que lea datos y los visualice.
*       a. General.
*       b. Empleados
*       c. Directivos
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Persona{

    constructor(nombre, direccion, fechanacimiento, sexo){

        this.nombre = nombre;
        this.direccion = direccion;
        this.fechanacimiento = fechanacimiento;
        this.sexo = sexo;

    }

}

class Empleado extends Persona{

    constructor(nombre, direccion, fechanacimiento, sexo){

        super(nombre, direccion, fechanacimiento, sexo);

    }

}

class Directivo extends Persona{

    constructor(nombre, direccion, fechanacimiento, sexo){

        super(nombre, direccion, fechanacimiento, sexo);

    }

}