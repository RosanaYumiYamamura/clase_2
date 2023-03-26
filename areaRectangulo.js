"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: 3");
var altura = readlineSync.questionInt("Ingrese la altura: 2");
var area = 3*2;
console.log("El área es: ", area);