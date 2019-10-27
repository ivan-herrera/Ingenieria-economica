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
    var anualidad, tasaInteres, tiempo, result, gradiente;

    anualidad = document.getElementById("anualidad").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;
    gradiente = document.getElementById("gradiente").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = anualidad;
    b = ((elevado - parseInt(1))/(divisor));
    c = gradiente / tasaInteres;
    d = ((elevado - parseInt(1))/(divisor) - (tiempo)/(elevado));

    //console.log("A: " + a + " | B: " + b + " | C:" + c + " | D: " + d);

    r = a*b+c*d;

    result = Math.round(parseFloat(r));

    document.getElementById("resultadoVP").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionVP").style.display = 'block';
}

function calcularValorFuturo(){
    var anualidad, tasaInteres, tiempo, result;

    anualidad = document.getElementById("anualidadVF").value;
    tasaInteres = document.getElementById("tasaInteresVF").value;
    tiempo = document.getElementById("tiempoVF").value;
    gradiente = document.getElementById("gradienteVF").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = anualidad;
    b = ((elevado - parseInt(1))/(tasaInteres));
    c = gradiente / tasaInteres;
    d = ((elevado - parseInt(1))/(tasaInteres) - tiempo);
    console.log("A: " + a + " | B: " + b + " | C:" + c + " | D: " + d);
    r = a*b+c*d;

    result = Math.round(parseFloat(r));

    document.getElementById("resultadoVF").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionVF").style.display = 'block';
}

function calcularAnualidadVF(){
    var valorFuturo, tasaInteres, tiempo;

    valorFuturo = document.getElementById("valorFuturoA").value;
    tasaInteres = document.getElementById("tasaInteresA").value;
    tiempo = document.getElementById("tiempoA").value;
    gradiente = document.getElementById("gradienteA").value;

    base = parseInt(1) + parseFloat(tasaInteres);
    elevado = Math.pow(base, tiempo);
    divisor = parseFloat(tasaInteres) * elevado;

    a = valorFuturo;
    b = ((elevado - parseInt(1))/(tasaInteres));
    c = gradiente / tasaInteres;
    d = ((elevado - parseInt(1))/(tasaInteres) - tiempo);
    console.log("A: " + a + " | B: " + b + " | C:" + c + " | D: " + d);
    r = a-c*d/b;

    result = Math.round(parseFloat(r));

    document.getElementById("alertitaA").innerHTML =  new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionA").style.display = 'block';
}


function calcularCuota(){
    var anualidad, gradiente, cuota, result;

    anualidad = document.getElementById("anualidadC").value;
    gradiente = document.getElementById("gradienteC").value;
    cuota = document.getElementById("cuota").value;

    r = parseInt(anualidad) + (cuota - parseInt(1))*parseInt(gradiente);
    console.log("A: " + anualidad + " | B: " + (cuota - parseInt(1)) + " | C:" + gradiente);
    result = Math.round(parseFloat(r));

    document.getElementById("alertitaC").innerHTML = new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</em>";
    document.getElementById("notificacionC").style.display = 'block';
}


function limpiarVP(){
    document.getElementById("anualidad").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("gradiente").value = "";
    document.getElementById("resultadoVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";
}

function limpiarVF(){
    document.getElementById("anualidadVF").value = "";
    document.getElementById("tasaInteresVF").value = "";
    document.getElementById("gradienteVF").value = "";
    document.getElementById("tiempoVF").value = "";
    document.getElementById("resultadoVF").innerHTML = "";
    document.getElementById("notificacionVF").style.display = "none";
}

function limpiarAVF(){
    document.getElementById("valorFuturoA").value = "";
    document.getElementById("tasaInteresA").value = "";
    document.getElementById("tiempoA").value = "";
    document.getElementById("gradienteA").value = "";
    document.getElementById("alertitaA").innerHTML = "";
    document.getElementById("notificacionA").style.display = "none";
}

function limpiarC(){
    document.getElementById("anualidadC").value = "";
    document.getElementById("gradienteC").value = "";
    document.getElementById("cuota").value = "";
    document.getElementById("alertitaC").innerHTML = "";
}
