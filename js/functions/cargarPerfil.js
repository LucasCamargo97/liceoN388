var nombre;
var apellido;
var edad;
var email;
var ci;
let alumnoArray = []

function cargarDatos(event){
    event.preventDefault()
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var edad = document.getElementById('edad');
    var email = document.getElementById('email');
    var ci = document.getElementById('ci');
    var alumno1 = new Alumno(nombre,apellido,edad,email,ci);
    alumno1.mostrarDatos();
    alumnoArray.push(alumno1);
    localStorage.setItem("alumno1", JSON.stringify(alumnoArray));
    let alumnoArray1 = JSON.parse(localStorage.getItem("alumno1"))
    }

function Alumno (nombre,apellido,edad,email,ci) {
    this.nombreAlumno = nombre;
    this.apellidoAlumno = apellido;
    this.edad = edad;
    this.email = email;
    this.ci = ci;
    this.mostrarDatos = function () {
            var msg = 'Nombre: ' + this.nombreAlumno.value + ' Apellido: ' + this.apellidoAlumno.value
            + ' Edad: ' + this.edad.value + ' Email: ' + this.email.value + ' CI: ' + this.ci.value ;
            document.getElementById('perfilAlumnoH2').innerHTML = `Bienvenido/a ${this.nombreAlumno.value}`;
            document.getElementById('perfilAlumnoP').innerHTML = `Estos son tus datos: `;
            document.getElementById('perfilAlumnoP2').innerHTML = `${msg}`;
            document.getElementById('perfilAlumnoP3').innerHTML = `Gracias por registrarte ${this.nombreAlumno.value}`;
        }
    }
