const prompt = require("prompt-sync")();


 //1.-Escribe un programa que imprima los números del
//1 al 10 utilizando un bucle for

console.log("Ejercicio1")
for(let i = 1; i <= 10; i++){
    console.log(i);
}

/* 2.- Imprime los números pares del 1 al 20 utilizando un
bucle for y una sentencia if*/

let numero = number(prompt("introduce el numero: "));
console.log(`--- ${numero}---`);
for(let i= 1; i <= 10; numero, i++) {
console.log("Ejercicio2")

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0);
    console.log(i)
}

/* 3.- Escribe un programa que muestre la tabla de multiplicar
de un número ingresado por el usuario utilizando un bucle for*/

console.log("Ejercicio3")

let numero = number(prompt("introduce el numero para  ver su tabala de multiplicar:"));
console.log(`---Tabla de multiplicar del ${numero}---`);
for(let i= 1; i <= 10; numero, i++) {
    let resultado = numero * i;
    console.log(`${numero} * {i}`)
}


/* 4.- Dada una lista de números, calcula la suma de todos 
los elementos utilizando un bucle for*/

console.log("Ejercicio 4") 
// Escribe un programa que sume números ingresados por el usuario hasta que se ingrese
//un número negativo utilizando un bucle while.");

let sumaTotal = 0;
let numeroIngresado;
while (true) {
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
 
    if (numeroIngresado < 0) {
        break;
    }
     sumaTotal = numeroIngresado;
}
console.log(`La suma total de los números ingresados es: ${sumaTotal}`)