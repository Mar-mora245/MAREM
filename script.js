let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList  ="responsibe";
        menuVisible = true; 
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
