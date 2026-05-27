
/*1. Crea dos variables: una con tu nombre y otra
 con tu apellido. Imprime ambos juntos en un solo
  console.log()*/
  console.log("Ejercicio1")

  let nombre = "Nancy";
  let apellido = "Pérez";
  console.log(nombre + " " + apellido);

  2. /* Crea una variable con un número. Súmale 5, 
  luego multiplícalo por 3 e imprime el resultado*/

  console.log("Ejercicio2")

  let numero =7; /* variable declarada con su valor*/
  console.log((numero + 5) * 3); /* se realiza la 
  operacion y se imprime el resultado */
  
3. /*Crea una variable con tu
 comida favorita e imprímela en consola*/
console.log("Ejercicio3")

 let comidaFavorita = "arroz con zapallo italiano";
 console.log(comidaFavorita);

 /* 4. Crea dos variables `a = 10` y `b = 3`
    
    Imprime:
    
    - La suma
    - La resta
    - La multiplicación
    - El resultado del módulo (`%`)

    - Ahora cambia los valores por tipo de
     datos strings y luego string y number 
     ¿Qué sucede en cada uno?*/ 

     console.log("Ejercicio4")
     let a = 10
     let b = 3
     console.log( a + b); // ya definí la variable a y b , ahora puedo operarlas
     console.log(a - b);
     console.log(a * b); 
     console.log(a % b);
     
     /* Cambiando valores por dato String */ 
a = "10"
b = "3"

console.log(a + b); /* no hace operacion matematica, si no que junta numero 10 + 3 = 103*/
console.log(a - b); /* opera sin problema */ 
console.log(a * b); /* opera sin problema */
console.log(a % b); /*  opera sin problema */

/* Cambiando datos por string y luego numeros*/

a = "10"    /* esta vendria siendo una variable string */
b = 3       /* esta vendria siendo una variable number */

console.log(a + b);  /* 103, mismo resultado que si a y b fueran string
console.log(a - b);  /* 7, se realiza operacion, no afecta*/ 
console.log(a * b); /* 30, se realiza operacion, no afecta*/
console.log(a % b); /* 1, se realiza operacion , no afecta */


console.log(typeof a);  /* dice que a es string*/
console.log(typeof b); /* dice que es un number */

/* 5. Crea una variable `edad = 15`
    
    Imprime si:
    
    - es mayor a 10
    - es menor a 18 */

console.log("Ejercicio5")

let edad =  15 /* se declara la variable */
console.log(edad >= 10 && edad < 18); /* se incluye la condicion */
/* opera si se cumple condicion*/
if(edad>= 10 && edad <18){     /* se imprime ya que es V */
  console.log(edad)
};

/* 6. Crea una variable `numero = 8`
    
    Imprime si:
    
    - es mayor que 5 Y menor que 10 */

    console.log("Ejercicio6")

    numero = 8;

    if(numero >5 && numero <10){
      console.log(numero)
    }

/* 7. Crea una variable `nota = 6`
    
    Imprime si:
    
    - es igual a 7 */
    console.log("Ejercicio7")

    let nota = 6

    if(nota == 7){
      console.log(nota)
    }   
    /* no se imprime nada porque no se cumple la condicion */

    /*8. Crea una variable `temperatura = 25`
    
    Imprime si:
    
    - es mayor o igual a 30 */

    console.log("Ejercicio8")

    let temperatura = 25
    if(temperatura >= 30){
      console.log(temperatura)
    };

/* no se imprime porque temperatura es 25, no es igual o mayor a 30 */

/*9. Crea dos números
    
    Imprime:
    
    - si son iguales
    - si uno es mayor que el otro */

    console.log("Ejercicio9")

    let num1 = 5
    let num2 = 20
        
    if(num1 == num2) {
      console.log("son iguales:", num1, num2)
    } else if (num1 > num2) {
      console.log("num1 es mayor:", num1, num2)
    } else {
      console.log("numero2 es mayor:", num1, num2)
    }
/* 10. Crea: let edad=17;
let tienePermiso=true;

Imprime: puede conducir 
(edad >= 18 O tienePermiso)*/

console.log("Ejercicio10")

let edadx = 17;
let tienePermiso = true;

if(edad > 18){
  console.log("puede conducir")
} else if(tienePermiso){
  console.log("puede conducir")
}

console.log("Ejercicio11")

/* 11. Crea: 
let usuario = "admin"
let pasword = "1234"

usuario es "admin" y pasword "1234" */

let usuario = "admin";
let pasword = "1234";
console.log('usuario es ${admin} y pasword {1234}')










    






















  