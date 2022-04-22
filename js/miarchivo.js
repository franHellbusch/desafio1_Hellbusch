// definiendo variables
let nombre
let apellido

let producto

// definiendo funcion de bienvenida
function bienvenida() {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    if ((nombre == "") || (apellido == "")) {
        alert("Debe completar ambos campos: Nombre y Apellido");
        bienvenida()
    } else {
        let mensaje = "Bienvenido " + nombre + " " + apellido + ", a una de las tiendas mas llamativas de ropa en Argentina! A continuacion podra realizar su compra.";
        alert(mensaje);
    }
}

// definiendo funcion de remeras
function remeras() {
    let entradaRemeras = parseInt(prompt("Cual remera elije? \n 1| Remera con mangas cortas: $2500 \n 2| Remera musculosa: $2100 \n 3| Remera mangas largas:$1900 \n 4| Volver a menu de compra"))
    if (entradaRemeras = 1) {
        alert("Eligio remera mangas cortas: con un precio de $2500")
        return producto = "remera de mangas cortas a $2500";
    } else if (entradaRemeras = 2) {
        alert("Eligio remera musculosa: con un precio de $2100")
        return producto = "remera musculosa a $2100";
    } else if (entradaRemeras = 3) {
        alert("Eligio remera mangas largas: con un precio de $1900")
        return producto = "remera de mangas largas  a $1900";
    } else if (entradaPantalones = 4) {
        compra()
    } else{
        alert("Error: ingrese un numero");
        remeras()
    }
}

// definiendo funcion de pantalones
function pantalones() {
    let entradaPantalones = parseInt(prompt("Cual remera elije? \n 1| Pantalon corto: $2000 \n 2| Pantalon de jean: $2800 \n 3| Pantalon jogging: $2500 \n 4| Volver a menu de compra"))
    if (entradaPantalones = 1) {
        alert("Eligio pantalon corto: con un precio de $2000")
        return producto = "pantalon corto a $2000";
    } else if (entradaPantalones = 2) {
        alert("Eligio pantalon de jean: con un precio de $2800")
        return producto = "pantalon de jean a $2800";
    } else if (entradaPantalones = 3) {
        alert("Eligio pantalon jogging: con un precio de $2500")
        return producto = "pantalon de jean a $2500";
    } else if (entradaPantalones = 4) {
        compra()
    } else {
        alert("Error: ingrese un numero");
        pantalones()
    }
}

// definiendo funcion de buzos
function buzos() {
    let entradaBuzos = parseInt(prompt("Cual remera elije? \n 1| Buzo con capucha: $4000 \n 2| Buzo sin capucha: $3500 \n 3| Volver a menu de compra"))
    if(entradaBuzos = 1){
        alert("Eligio buzo con capucha: con un precio de $4000")
        return producto = "buzo con capucha a $4000";
    } else if (entradaBuzos = 2) {
        alert("Eligio buzo sin capucha: con un precio de $3500")
        return producto = "buzo sin capucha a $3500";
    } else if (entradaBuzos = 3){
        compra()
    } else {
        alert("Error: ingrese un numero");
        buzos()
    } 
}


// definiendo funciones de compra
function compra() {
    let entrada1 = parseInt(prompt("Nuestro catalogo muestra estos productos, cual desea comprar? \n 1| Remeras \n 2| Pantalones \n 3| Buzos \n 4| Finalizar compra"));
    if (entrada1 == 1) {
        remeras();
    } else if (entrada1 == 2){
        pantalones()
    } else if (entrada1 == 3) {
        buzos()
    } else if (entrada1 == 4) {
        return producto = ""
    } else {
        alert("Error: ingrese un numero");
        compra();
    }
}

// definiendo funcion continuar
function continuar() {
    let preguntar = prompt("Quieres cambiar tu producto o comprar uno en caso de no haberlo hecho? \n NO| Finalizar la compra \n SI| Volver al menu de compra")
    if ((preguntar == "no") || (preguntar == "NO")) {
        finalizar(producto)
    } else if ((preguntar == "si") || (preguntar == "SI")){
        compra()
        continuar()
    } else {
        alert("Error: ingrese SI o NO");
        continuar()
    }
}
// definiendo la funcion de finalizar
function finalizar(compra) {
    if (compra == ""){
        alert("No a realizado ninguna compra, gracias por su visita, vuelva pronto!");
    }else{
        alert("usted realizo la compra de un/a: " + compra + ", gracias " + nombre + " por tu confianza.");
    }
}

// llamando funciones

bienvenida();
compra();
continuar();