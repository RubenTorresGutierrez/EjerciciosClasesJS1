/**
*   @file ejercicio5
*   @description Construir una clase base genérica llamada edificio que almacene el
*   número de plantas que tiene el edificio, el número de habitaciones y
*   su superficie total. Crear una clase derivada llamada casa que
*   herede edificio y que almacene también lo siguiente: el número de
*   dormitorios y de baños. Crear también otra clase derivada llamada
*   oficina que herede edificio y que almacene además el número de
*   extintores y de teléfonos.
*   @version 1.0.0
*   @author Rubén Torres <rtorresgutierrez.guadalupe@alumnado.fundacionloyola.net>
*   @license GPL-3.0-or-later
*   Ref: https://spdx.org/licenses/
*
*   Ref JSDoc: https://jsdoc.app/
*/
'use strict'

class Edificio{

    constructor(plantas, habitaciones, superficie){

        this.plantas = plantas;
        this.habitaciones = habitaciones;
        this.superficie = superficie;

    }

}

class Casa extends Edificio{

    constructor(plantas, habitaciones, superficie, dormitorios, baños){

        super(plantas, habitaciones, superficie);
        this.dormitorios = dormitorios;
        this.baños = baños;

    }

}

class Oficina extends Edificio{

    constructor(plantas, habitaciones, superficie, extintores, telefonos){

        super(plantas, habitaciones, superficie);
        this.extintores = extintores;
        this.telefonos = telefonos;

    }

}