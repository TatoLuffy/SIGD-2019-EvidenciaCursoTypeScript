"use strict";
// Funciones Básicas
function sumar1(a, b) {
    return a + b;
}
var contar1 = function (heroes) {
    return heroes.length;
};
var superHeroes1 = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar1(superHeroes1);
//Parametros por defecto
function llamarBatman1(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman1(true);
// Rest?
function unirheroes1() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
// Tipo funcion
function noHaceNada1(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco1;
noHaceNadaTampoco1 = noHaceNada1;
