
/* 1.-Escribe un programa que imprima los números del
1 al 10 utilizando un bucle for*/

for(let i = 1; i <= 10; i++){
    console.log(i);
}

/* 2.- Imprime los números pares del 1 al 20 utilizando un
bucle for y una sentencia if*/

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){ 
    console.log(i);
}
}
/* 3.- Escribe un programa que muestre la tabla de multiplicar
de un número ingresado por el usuario utilizando un 
bucle for*/

let numero = 2;
prompt for(let numero = 2; numero * 2); 

const prompt = require("prompt-sync")();


/* 4.- Dada una lista de números, calcula la suma de todos 
los elementos utilizando un bucle for*/


console.log("Ejercicio 2: Escribe un programa que sume números ingresados por el usuario hasta que se ingrese un número negativo utilizando un bucle while.");
let sumaTotal = 0;
let numeroIngresado;
while (true) {
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
 
    if (numeroIngresado < 0) {
        break;
    }
 
    sumaTotal += numeroIngresado;
}
console.log(`La suma total de los números ingresados es: ${sumaTotal}`);

