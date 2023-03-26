"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var altura = readlineSync.questionInt("Ingrese la altura: ");
var area = base * altura;
console.log("El área es: ", area);
