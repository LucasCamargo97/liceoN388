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
/*Toma los datos de cada nota para generar el promedio y en base al resultado muestra aprobado o desaprobado*/
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
    }
    let profesores = [' Andres', ' Juan', ' Andrea', ' Mariana', ' Julio', ' Elizabeth']
    var profesoresOrdenados = profesores.sort()
    if(Promedio>6){
    document.getElementById('mensaje').innerHTML = `Felicitaciones, ha aprobado, su promedio es de ${Promedio.toFixed(1)}`
    document.getElementById('mensaje2').innerHTML = `Reciba las felicitaciones de los profesores: ${profesoresOrdenados}`
    }
    $("#mensaje3").append(document.createTextNode("Liceo N° 388"));
}
