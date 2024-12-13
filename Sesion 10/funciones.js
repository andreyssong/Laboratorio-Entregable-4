// Página 1
function mostrarValores () {
    let nombre="Andreysson";
    let edad=25;
    let esEstudiante=true;
    document.write("Nombre: " , nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("¿Es estudiante? " , esEstudiante, "<br>","<br>");

    nombre="Maicol";
    edad=19;
    esEstudiante=true;
    document.write("Nombre: " , nombre, "<br>");
    document.write("Edad: ", edad, "<br>");
    document.write("¿Es estudiante? " , esEstudiante, "<br>","<br>");
}
// Página 2
function operacionesMatematicas() {
    let a = 10;
    let b = 5;
    
    document.write("<strong> Resultado de Operaciones: </strong> <br> <br>");
    document.write("Resultado de Suma: ", (a + b), "<br>")
    document.write("Resultado de Resta: ", (a - b), "<br>")
    document.write("Resultado de Multiplicación: ", (a * b), "<br>")
    document.write("Resultado de División: ", (a / b), "<br>","<br>") 

    document.write("<strong> Comparaciones: </strong> <br> <br>")
    document.write("¿10 es igual a 5? ", (a == b), "<br>")
    document.write("¿10 es mayor o igual a 5? ", (a >= b), "<br>")
    document.write("¿10 es menor o igual a 5? ", (a <= b), "<br>")
}
// Página 3
function verificarConduccion() {
    let esMayordeEdad = true;
    let tieneLicencia = false;

    const puedeConducir = esMayordeEdad && tieneLicencia;
    document.write("<strong>¿Puede conducir?: </strong> " + puedeConducir + "<br><br>");

    const mensajeBienvenida = ` !Hola, bienvenido al sistema!`;
    document.write("<strong>Mensaje de Bienvenida: </strong> " + mensajeBienvenida);
}