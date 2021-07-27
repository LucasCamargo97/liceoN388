function aparece(id){
    if (document.getElementById){ 
    var aparece1 = document.getElementById(id); 
    aparece1.style.display = (aparece1.style.display == 'none') ? 'block' : 'none'; 
    }
    }
    window.onload = function(){
    aparece('cajaNotas', 'cajaAlumno');
    }