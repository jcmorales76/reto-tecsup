let litros = prompt("Ingresa la cantidad de Litros")
console.log("Cantidad de litros", litros, "Litros");
let precio = prompt("Ingrese el precio del galón")
console.log("Costo de Galón S/ ", precio, "Soles");

let plitros = 3.785;
let galon = (litros / plitros);
let total = (precio * galon);

alert(`${litros} litros despachados a un precio de S/ ${precio} soles por GL, con un total de S/ ${total.toFixed(2)}`);
