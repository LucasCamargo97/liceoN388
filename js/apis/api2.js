var datos = [];
keyLocalStorageDatos1 = [];
$.ajax({
    url: `https://restcountries.eu/rest/v2/all`,
    success: function (datos) {
    getElementById('datosaPaises').innerHTML(datos);
},
});

const keyLocalStorageDatos = "datos";

$.getJSON(`https://restcountries.eu/rest/v2/all`, function (datos) {
  products = datos;
  if (localStorage.getItem("datos") == null)
  localStorage.setItem(keyLocalStorageDatos, JSON.stringify(datos));
});
function datosLoad(){
  getElementById('datosPaises').innerHTML(datos);
}