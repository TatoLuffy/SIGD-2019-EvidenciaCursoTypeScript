"use strict";
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil2(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
var batimovil2 = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
var guason2 = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudad;
ciudad =
    function ciudadGotica(ciudadanos) {
        return ciudadanos.length;
    };
;
var Jose = /** @class */ (function () {
    function Jose(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Jose.prototype.imprimirBio = function () {
        console.log("Imprimiendo los datos de " + this.nombre);
    };
    return Jose;
}());
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
