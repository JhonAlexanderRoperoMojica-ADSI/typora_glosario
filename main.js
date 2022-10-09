function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
        alert(nombre);
    }
    return muestraNombre;
}

var miFunc = creaFunc();
miFunc();