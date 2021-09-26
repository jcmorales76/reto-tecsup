let Numero_hamburguesa = +prompt("Ingresa la cantidad de Hamburguesas")
console.log(Numero_hamburguesa," Unidad(es) de Hamburguesa")

let tipo_hamburguesa = prompt("Seleccione el tipo de hamburguesa, 1. Simple ($20.00), 2. Doble ($25.00), 3. Triple ($28.00)")
let tburguer=tipo_hamburguesa;

switch(tburguer){
    case "1":
        console.log("Selecciono la Hamburguesa Simple")
        break;
    case "2":
        console.log("Selecciono la Hamburguesa Doble")
        break;
    case "3":
        console.log("Selecciono la Hamburguesa Triple")
        break;
    default:
        console.log("Usted escogio un opcion incorrecta") 
        break;
}

if (tburguer == "1"){
    total= (Numero_hamburguesa*20.00);
    console.log("Total a pagar Efectivo : ",total);
}else if (tburguer == "2"){
    total= (Numero_hamburguesa*25.00);
    console.log("Total a pagar Efectivo: ",total);
}else{
    total= (Numero_hamburguesa*28.00);
    console.log("Total a pagar Efectivo: ",total);
}

let tipo_pago = prompt("Seleccione el tipo de Pago: 1. Pago en Efectivo, 2. Pago con tarjeta de Crédito(Recargo de 5%)")
switch(tipo_pago){
    case "1":
        alert(`Cantidad de Hamburguesas ${Numero_hamburguesa}
        Tipo de Hamburgues ${tburguer}
        Total a pagar = ${total}`);
        break;
    case "2":
        alert(`Cantidad de Hamburguesas ${Numero_hamburguesa}
        Tipo de Hamburgues ${tburguer}
        pagara con Tarjeta de Credito,Tiene un recargo del 5%
        Total a pagar = ${total*1.05}`);
        break;
    default:
        alert("Seleccione una opcion correcta")
        tipo_pago();
        break;
}


