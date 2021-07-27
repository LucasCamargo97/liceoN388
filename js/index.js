/*---------------COOKIES------------------*/
function compruebaAceptaCookies(){
    if(localStorage.aceptaCookies == 'true'){
    cajaCookies.style.display = 'none';
}
}
function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajaCookies.style.display = 'none';
}
$(document).ready(function () {
    compruebaAceptaCookies();
});
/*-----------------------------------------*/
