function holamundo(nombre){
    return "Hola Mundo!! Soy"+nombre;
}

var nombre ="Daniel";

document.getElementById("container").innerHTML=holamundo(nombre);