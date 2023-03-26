"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precio = readlineSync.questionInt("Ingrese la precio: ");
var porcentaje = readlineSync.questionInt("Ingrese la porcentaje: 10");
var Total = precio * porcentaje / 100;
console.log("El Total es: ", Total);
