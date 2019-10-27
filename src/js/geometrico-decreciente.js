//Cuando el documento este listo, ejecutara el contenido dentro de laa función 
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("notificacionVP").style.display='none';
    document.getElementById("notificacionC").style.display = "none";
});

function calcularValorPresente(){
    var anualidad, tasaInteres, tiempo, result, variacion;

    anualidad = document.getElementById("anualidad").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;
    variacion = document.getElementById("variacion").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    base2 = parseInt(1) - parseFloat(variacion);
    elevado = Math.pow(base, tiempo);
    elevado2 = Math.pow(base2, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = anualidad;
    b = ((elevado - elevado2));
    c = (parseFloat(tasaInteres) + parseFloat(variacion))*(elevado);

    console.log("A: " + a + " | B: " + b + " | C:" + c);

    r = a*(b/c);

    result = Math.round(parseFloat(r));

    document.getElementById("resultadoVP").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionVP").style.display = 'block';
}

/*function calcularValorFuturo(){
    var anualidad, tasaInteres, tiempo, result;

    anualidad = document.getElementById("anualidadVF").value;
    tasaInteres = document.getElementById("tasaInteresVF").value;
    tiempo = document.getElementById("tiempoVF").value;
    variacion = document.getElementById("variacionVF").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    base2 = parseInt(1) + parseFloat(variacion);
    elevado = Math.pow(base, tiempo);
    elevado2 = Math.pow(base2, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = anualidad;
    b = ((elevado - elevado2));
    c = (tasaInteres - variacion);

    //console.log("A: " + a + " | B: " + b + " | C:" + c + " | D: " + d);

    r = a*(b/c);

    result = Math.round(parseFloat(r));

    document.getElementById("resultadoVF").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
}

function calcularAnualidadVP(){
    var valorPresente, tasaInteres, tiempo;

    valorPresente = document.getElementById("valorPresenteA").value;
    tasaInteres = document.getElementById("tasaInteresA").value;
    tiempo = document.getElementById("tiempoA").value;
    variacion = document.getElementById("variacionA").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = valorPresente;
    b = ((parseInt(1) - variacion));
    c = parseInt(1)-((parseInt(1) + parseFloat(variacion))/elevado);

    console.log("A: " + a + " | B: " + b + " | C:" + c );
    r = a*(b/c);

    result = Math.round(parseFloat(r));

    document.getElementById("alertitaA").innerHTML =  new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
}*/


function calcularCuota(){
    var anualidad, gradiente, cuota, result;

    anualidad = document.getElementById("anualidadC").value;
    variacion = document.getElementById("variacionC").value;
    cuota = document.getElementById("cuota").value;

    r = parseInt(anualidad) * (Math.pow(parseInt(1) - parseFloat(variacion), cuota-parseInt(1)));
    console.log("A: " + anualidad + " | B: " + (parseInt(1) + parseFloat(variacion)) + " | C:" + variacion);
    result = Math.round(parseFloat(r));

    document.getElementById("alertitaC").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionC").style.display = "block";
}


function limpiarVP(){
    document.getElementById("anualidad").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("variacion").value = "";
    document.getElementById("resultadoVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";

}

function limpiarC(){
    document.getElementById("anualidadC").value = "";
    document.getElementById("variacionC").value = "";
    document.getElementById("cuota").value = "";
    document.getElementById("alertitaC").innerHTML = "";
    document.getElementById("notificacionC").style.display = "none";
}
