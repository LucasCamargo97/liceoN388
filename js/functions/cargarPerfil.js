var nombre;
var apellido;
var edad;
var email;
var ci;
let alumnoArray = []
/*Toma los datos para generar el perfil y ademas los guarda en un array*/
function cargarDatos(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var email = document.getElementById('email').value;
    var ci = document.getElementById('ci').value;
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
            var msg = 'Nombre: ' + this.nombreAlumno + ' Apellido: ' + this.apellidoAlumno
            + ' Edad: ' + this.edad + ' Email: ' + this.email + ' CI: ' + this.ci ;
            document.getElementById('perfilAlumnoH2').innerHTML = `Bienvenido/a ${this.nombreAlumno}`;
            document.getElementById('perfilAlumnoP').innerHTML = `Estos son tus datos: `;
            document.getElementById('perfilAlumnoP2').innerHTML = `${msg}`;
            document.getElementById('perfilAlumnoP3').innerHTML = `Gracias por registrarte ${this.nombreAlumno}`;
            console.log(alumnoArray);
        }
    }
/*validacion del form*/
    (function () {
        'use strict'
    
        var forms = document.querySelectorAll('.needs-validation')
    
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }else{
                  alert('Perfil generado!')
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()