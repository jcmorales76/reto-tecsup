let numeroCita = +prompt("Ingrese su numero de Cita");
let primeraCita = 0;
let segundaCita = 0;
let tereraCita = 0;
let cuartaCita = 0;
let total = 0;

if (numeroCita <= 3) {
  costoCita = 200;
  total = costoCita * numeroCita;
} else if (numeroCita <= 5) {
  costoCita = 150;
  total = (numeroCita - 3) * 150 + 600;
} else if (numeroCita <= 8) {
  costoCita = 100;
  total = (numeroCita - 5) * 100 + 900;
} else {
  costoCita = 50;
  total = (numeroCita - 8) * 50 + 1200;
}

console.log(`Su numero de cita es: ${numeroCita}
Costo de la Cita es ${costoCita}, 
Costo total de tratamiento de ${total}`);
