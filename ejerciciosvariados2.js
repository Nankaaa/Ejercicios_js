const prompt = require("prompt-sync")();

console.log("--- Actividad 2 ---");

// Ponderaciones (porcentajes)
let ponderacion1 = 0.5; // 50%
let ponderacion2 = 0.3; // 30%
let ponderacion3 = 0.2; // 20%

// Pedir las notas al usuario
let nota_1 = Number(prompt("Introduce la nota del Proyecto Integrador: "));
let nota_2 = Number(prompt("Introduce la nota Técnica: "));
let nota_3 = Number(prompt("Introduce la nota de Tareas: "));

// Calcular lo que aporta cada nota al total
let puntajeProyecto = nota_1 * ponderacion1;
let puntajeTecnico  = nota_2 * ponderacion2;
let puntajeTareas   = nota_3 * ponderacion3;

// La calificación final es la SUMA de los puntajes ponderados
let calificacionFinal = puntajeProyecto + puntajeTecnico + puntajeTareas;

console.log(`--- Resultados ---`);
console.log(`Aporte Proyecto (50%): ${puntajeProyecto}`);
console.log(`Aporte Técnico (30%): ${puntajeTecnico}`);
console.log(`Aporte Tareas (20%): ${puntajeTareas}`);
console.log(`Calificación Final: ${calificacionFinal}`);
