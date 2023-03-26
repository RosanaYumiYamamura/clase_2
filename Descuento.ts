import * as readlineSync from "readline-sync";
let precio : number = readlineSync.questionInt( "Ingrese la precio: ");
let porcentaje : number = readlineSync.questionInt( "Ingrese la porcentaje: ");
let Total : number = precio * porcentaje / 100;
console.log("El Total es: ", Total);