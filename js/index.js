var Promedio;
var Nota1;
var Nota2;
var Nota3;
var Nota4;
var Nota5;
var Nota6;
var Nota7;
var Nota8;
var Nota9;
var nombre;
var apellido;
var edad;
var ci;
let alumnoArray = []

/* COOKIES */
function compruebaAceptaCookies(){
    if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
}
}
function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
}
$(document).ready(function () {
    compruebaAceptaCookies();
});

/*-----------------------------------------*/

function aparece(id){
    if (document.getElementById){ 
    var aparece1 = document.getElementById(id); 
    aparece1.style.display = (aparece1.style.display == 'none') ? 'block' : 'none'; 
    }
    }
    window.onload = function(){
    aparece('cajaNotas', 'cajaAlumno');
    }

function cargarDatos(){
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var edad = document.getElementById('edad');
    var ci = document.getElementById('ci');
    var alumno1 = new Alumno(nombre,apellido,edad,ci);
    alumno1.mostrarDatos();
    alumnoArray.push(alumno1);
    localStorage.setItem("alumno1", JSON.stringify(alumnoArray));
    let alumnoArray1 = JSON.parse(localStorage.getItem("alumno1"))
    }

function Alumno (nombre,apellido,edad,ci) {
    this.nombreAlumno = nombre;
    this.apellidoAlumno = apellido;
    this.edad = edad;
    this.ci = ci;
    this.mostrarDatos = function () {
        var msg = 'Nombre: ' + this.nombreAlumno.value + ' Apellido: ' + this.apellidoAlumno.value
        + ' Edad: ' + this.edad.value + ' CI: ' + this.ci.value ;
        document.getElementById('perfilAlumnoH2').innerHTML = `Bienvenido/a ${this.nombreAlumno.value}`;
        document.getElementById('perfilAlumnoP').innerHTML = `Estos son tus datos: `;
        document.getElementById('perfilAlumnoP2').innerHTML = `${msg}`;
        document.getElementById('perfilAlumnoP3').innerHTML = `Gracias por registrarte ${this.nombreAlumno.value}`;
        };
    }

function generarPromedio(){
    var Nota1 = parseInt(document.getElementById('nota1').value); //matematica
    var Nota2 = parseInt(document.getElementById('nota2').value); //fisica
    var Nota3 = parseInt(document.getElementById('nota3').value); //historia
    var Nota4 = parseInt(document.getElementById('nota4').value); //filosofia
    var Nota5 = parseInt(document.getElementById('nota5').value); //derecho
    var Nota6 = parseInt(document.getElementById('nota6').value); //ed fisica
    var Nota7 = parseInt(document.getElementById('nota7').value); //biologia
    var Nota8 = parseInt(document.getElementById('nota8').value); //literatura
    var Nota9 = parseInt(document.getElementById('nota9').value); //ingles
    var Promedio = (Nota1 + Nota2 + Nota3 + Nota4 + Nota5 + Nota6 + Nota7 + Nota8 + Nota9) / 9
    if(Promedio<6){
    document.getElementById('mensaje').innerHTML = `Lo sentimos, ha desaprobado, su promedio es de ${Promedio.toFixed(1)}`
    }else {
    document.getElementById('mensaje').innerHTML = `Felicitaciones, ha aprobado, su promedio es de ${Promedio.toFixed(1)}`
    }
    let profesores = [' Andres', ' Juan', ' Andrea', ' Mariana', ' Julio', ' Elizabeth']
    var profesoresOrdenados = profesores.sort()
    if(Promedio>6){
    document.getElementById('mensaje2').innerHTML = `Reciba las felicitaciones de los profesores: ${profesoresOrdenados}`
    }
    $("#mensaje3").append(document.createTextNode("Liceo N° 388"));
}
