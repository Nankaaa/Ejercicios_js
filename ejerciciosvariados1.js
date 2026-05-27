/*Actividad 1: Realizar el diagrama de flujo de los siguientes ejercicios y crear un programa.
1. Obtener la suma de dos números cualesquiera

Inicio
declarar numero 1 y su valor
declarar numero2 y su valor
sumar numero1 + numero2
imprimir resultado
fin

*/

//codigo suma de dos numros cualesquiera

let a = 7
let b = 8
console.log(a + b);

/* 2. Obtener e imprimir el nombre y la edad de una persona 
Inicio
Paso 1: Declarar variable objeto persona, es variableObjeto = {} 
Paso 2: Ingresar dato de nombre y su valor (indica propiedad del objeto)
Paso 3: Ingresar dato de edad y su valor ( indica propiedad del objeto)
Paso 4: Imprimir nombre
Paso 5: Imprimir edad
Fin
*/


let persona = {
    nombre: "Carla",
    edad: 35
}; 

console.log(persona.nombre);
console.log(persona.edad);

/* CONCLUSIONES : ¿ PORQUE NO SE USA EL OPERADOR && ?  PORQUE EL && SE USA PARA 
IMPRIMIR SI ALGO CUMPLE UNA CONDICION IMPRIMIR SI (16 > =5 && 16 <= 18), EN ESTE 
CASO NO HAY CONDICIONALES */


/* 3. Obtener e imprimir el nombre, dirección y estado civil de una persona

Inicio
Declarar variable persona
Ingresar nombre y su valor
Ingresar direccion y su valor
Ingresar estado civil y su valor
Imprimir nombre y su valor
Imprimir direccion y su valor
Imprimir estado civil y su valor
Fin */

let persona2 = {
    nombre: "Francisca",
    direccion: 'Avenida Los Pinos ${456} + Departamento ${302} + Santiago, Chile',
    estadoCivil: "soltera"
};

console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.estadoCivil);

/* 4. Capturar el nombre y dos calificaciones de un alumno e imprimir el promedio de estas

Inicio 
Declarar variable persona3  
Declarar nombre persona3
Declarar calificacion 1
Declarar calificacion 2
Declarar promedio de calificacion 1 y calificacion 2
Imprimir nombre persona3
Imprimir calificacion 1
Imprimir calificacion 2
Imprimir promedio de calificacion 1 y calificacion 2
Fin*/


let persona3 = "Juan";
let nota1 = 6.0;
let nota2 = 6.8;
let promedio = (nota1 + nota2) / 2;
console.log(persona3);
console.log(nota1);
console.log(nota2);
console.log(promedio);

/* otra opcion

let persona3 = "Juan" 
let nota1 = 6.0
let nota2 = 6.8
let promedioNotas:(nota1 + nota2) / 2

console.log(persona3.nombre)
console.log(persona3.nota1)
console.log(persona3.nota2)
console.log(persona3.promedioNotas); */


/* CONCLUSIONES : SE DEBE DISTINGUIR PERSONA 3 PORQUE 
LA VARIABLE PERSONA NO SE PUEDE DECLARAR + DE UNA VEZ*/

/* 5. Obtener la suma y el promedio de cinco calificaciones que de un alumno 
Inicio
Declarar nota 1
Declarar nota 2
Declarar nota 3
Declarar nota 4
Declarar nota 5 
Declarar sumaNotas
Declarar promedioNotas
Imprimir sumaNotas 1 + 2 + 3 + 4 + 5
Imprimir promedioNotas 1, 2, 3, 4 y 5 
Fin*/

let nota_1 = 7.0;
let nota_2 = 6.5;
let nota_3 = 6.0;
let nota_4 = 6.7;
let nota_5 = 6.8;
let sumaNotas = (nota_1 + nota_2 + nota_3 + nota_4 + nota_5); 
let promedioNotas = (sumaNotas) / 5; 
console.log(sumaNotas);
console.log(promedioNotas); 

/* 6. Convertir dólares a pesos 
Inicio
Ingresar Dolares
Ingresar valor del dolar
Multiplicar dolar x valor del dolar
Imprimir pesos chilenos
Fin */

let dolaresquetengo = 6;
let valorDolar = 910;
let conversionDolaraPesos = (dolaresquetengo * valorDolar);
console.log(conversionDolaraPesos); 

/* 7. Obtener el descuento de un producto e imprimirlo

inicio
Crear producto
Ingresar valorProducto
Ingresar % Descuento 
Imprimir */

/* 

let producto = {
    nombre: "ropa",
    valor: 25000,
    valorDescuento: 0.2,
    aplicacionDescuento:(producto.valor * producto.valorDescuento), 
    precioFinal:(producto.valor - aplicacionDescuento),
}
console.log(producto.precioFinal);
typeof(25000); 
 */

/* OBSERVACIÓN: 
ERROR: EL TERMINAL LANZA ERROR Y DICE QUE VARIABLE VALOR.PRODUCTO NO ESTÁ
DEFINIDA, Regla importante: Mientras creas un objeto, puedes asignar valores,
pero no usar el objeto completo todavía HACIENDO REFERENCIA A SUS PROPIEDADES PORQUE 
AUN NO SE RECONOCEN COMO TAL, PRIMERO SE CREAN LAS VARIABLES, LUEGO SE CITAN */


/*VAMOS DENUEVO */ 

/* 7. Obtener el descuento de un producto e imprimirlo

inicio
Crear producto
Ingresar valorProducto
Ingresar % Descuento 
Imprimir  */

let ropa = {
    valor: 25000,
    valorDescuento: 0.2,
}

let aplicacionDescuento = (ropa.valor * ropa.valorDescuento);
let valorFinal = (ropa.valor - aplicacionDescuento); 

console.log(valorFinal); 

/* OBSERCACIÓN 
OTRO ERRO: TENER CUIDADO AL REALIZAR NUEVAMENTE UN EJERCICIO COMO LO HICE AQUÍ 
VOLVI A CREAR UNA VARIABLE QUE YA HABÍA CREADO ANTES valorDescuento Y por eso me lanzó error
las variables solo se pueden citar una vez --> SOLUCIÓN: SELECCIONAR TODO EL EJERCICIO ANTERIOR 
Y ENCERRAR EN COMENTARIO CON alt + shift + A */ 

/* 8. Imprimir el sueldo neto de un empleado considerando impuestos

Inicio
Crear variable empleado
Crear Variable sueldo bruto
Crear variable Descuento 
Ingresar calculo de Sueldo neto
Imprimir Sueldo neto
Fin */
