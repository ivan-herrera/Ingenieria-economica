//Cuando el documento este listo, ejecutara el contenido dentro de laa función 
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("notificacionVP").style.display='none';
    document.getElementById("notificacionVF").style.display='none';
    document.getElementById("notificacionA").style.display = "none";
    document.getElementById("notificacionC").style.display = "none";
    document.getElementById("notificacionT").style.display = "none";
});

function calcularValorPresente(){
    var anualidad, tasaInteres, tiempo, result;

    anualidad = document.getElementById("anualidad").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    result = Math.round(parseFloat((anualidad)*(base)*((elevado - parseInt(1))/(divisor))));

    document.getElementById("resultadoVP").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionVP").style.display = 'block';
}

function calcularValorFuturo(){
    var anualidad, tasaInteres, tiempo, result;

    anualidad = document.getElementById("anualidadVF").value;
    tasaInteres = document.getElementById("tasaInteresVF").value;
    tiempo = document.getElementById("tiempoVF").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    result = Math.round(parseFloat((anualidad)*(base)*((parseFloat(elevado) - parseInt(1))/(tasaInteres))));

    document.getElementById("resultadoVF").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionVF").style.display='block';
}

function calcularAnualidadVP(){
    var valorPresente, tasaInteres, tiempo;

    valorPresente = document.getElementById("valorPresenteA").value;
    tasaInteres = document.getElementById("tasaInteresA").value;
    tiempo = document.getElementById("tiempoA").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    result = Math.round(parseFloat((valorPresente)/((base)*((elevado - parseInt(1))/(parseFloat(tasaInteres)*elevado)))));

    document.getElementById("alertitaTI").innerHTML =  new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionA").style.display = "block";
}


function calcularTiempo(){
    var anualidad, valorPresente, tasaInteres, result;

    anualidad = document.getElementById("anualidadT").value;
    valorPresente = document.getElementById("valorPresenteT").value;
    tasaInteres = document.getElementById("tasaInteresT").value;

    a = Math.log(anualidad);
    b = anualidad - parseFloat(tasaInteres);
    c = valorPresente - anualidad;
    d = Math.log(parseInt(1)+parseFloat(tasaInteres));

    result = Math.round(parseFloat((parseFloat(a)-Math.log(b*c))/(d) ));

    document.getElementById("alertitaC").innerHTML = result + " meses";
    document.getElementById("notificacionC").style.display = "block";
}


function limpiarVP(){
    document.getElementById("anualidad").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("resultadoVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";
}

function limpiarVF(){
    document.getElementById("anualidadVF").value = "";
    document.getElementById("tasaInteresVF").value = "";
    document.getElementById("tiempoVF").value = "";
    document.getElementById("resultadoVF").innerHTML = "";
    document.getElementById("notificacionVF").style.display = "none";
}

function limpiarI(){
    document.getElementById("valorPresenteI").value = "";
    document.getElementById("tasaInteresI").value = "";
    document.getElementById("tiempoI").value = "";
    document.getElementById("alertitaI").innerHTML = "";
    document.getElementById("notificacionI").style.display = "none";
}

function limpiarA(){
    document.getElementById("valorPresenteA").value = "";
    document.getElementById("tasaInteresA").value = "";
    document.getElementById("tiempoA").value = "";
    document.getElementById("alertitaTI").innerHTML = "";
    document.getElementById("notificacionTI").style.display = "none";
}

function limpiarAVF(){
    document.getElementById("valorFuturoAVF").value = "";
    document.getElementById("tasaInteresAVF").value = "";
    document.getElementById("tiempoAVF").value = "";
    document.getElementById("alertitaAVF").innerHTML = "";
    document.getElementById("notificacionT").style.display = "none";
}

function limpiarT(){
    document.getElementById("anualidadT").value = "";
    document.getElementById("valorFuturoAVF").value = "";
    document.getElementById("tasaInteresAVF").value = "";
    document.getElementById("tiempoAVF").value = "";
    document.getElementById("alertitaAVF").innerHTML = "";

}

function limpiarTI(){
    document.getElementById("anualidadT").value = "";
    document.getElementById("valorPresenteT").value = "";
    document.getElementById("tasaInteresT").value = "";
    document.getElementById("alertitaC").innerHTML = "";
    document.getElementById("notificacionC").style.display = "none";
}