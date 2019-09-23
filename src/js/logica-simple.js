//Cuando el documento este listo, ejecutara el contenido dentro de laa función 
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("notificacionVP").style.display='none';
    document.getElementById("notificacionVF").style.display='none';
    document.getElementById("notificacionI").style.display = "none";
    document.getElementById("notificacionTI").style.display = "none";
    document.getElementById("notificacionT").style.display = "none";
});

//Calculo del Valor Presente
function calcularVP(){
    var valorFuturo, tasaInteres, tiempo, result;

    valorFuturo = document.getElementById("valorFuturo").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    result = Math.round(parseFloat(valorFuturo/(1+tasaInteres*tiempo)));

    document.getElementById("alertitaVP").innerHTML = "El valor presente es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionVP").style.display = 'block';
}

//Calculo del Valor Futuro
function calcularVF(){
    var valorPresente, tasaInteres, tiempo, result, interes;

    valorPresente = document.getElementById("valorPresente").value;
    tasaInteres = document.getElementById("tasaInteresVF").value;
    tiempo = document.getElementById("tiempoVF").value;

    interes = valorPresente * tasaInteres * tiempo;
    vf= parseInt(valorPresente) + parseInt(interes);
    result =  Math.round(parseFloat(vf));

    document.getElementById("alertitaVF").innerHTML = "El valor futuro es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionVF").style.display='block';
}

//Calculo de la Tasa de Interés
function calcularTI(){
    var valorPresente, valorFuturo, tiempo;

    valorPresente = document.getElementById("valorPresenteTI").value;
    valorFuturo = document.getElementById("valorFuturoTI").value;
    tiempo = document.getElementById("tiempoTI").value;

    tasaInteres = ((valorFuturo/valorPresente - 1)/tiempo);
    total = (tasaInteres * 100);
    result = Math.round(parseFloat(total));
    document.getElementById("alertitaTI").innerHTML = "La tasa de interés es de: <strong>" + result + "% </strong>";
    document.getElementById("notificacionTI").style.display = "block";
}

//Calculo del Interés
function calcularI(){
    var valorPresente, tasaInteres, tiempo, result, interes;

    valorPresente = document.getElementById("valorPresenteI").value;
    tasaInteres = document.getElementById("tasaInteresI").value;
    tiempo = document.getElementById("tiempoI").value;
    interes = valorPresente * tasaInteres * tiempo;
    result =  Math.round(parseFloat(interes));
    document.getElementById("alertitaI").innerHTML = "El interés es de: <strong>" + new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP"}).format(result) + "</strong>";
    document.getElementById("notificacionI").style.display = "block";
}

//Calculo del Tiempo
function calcularT(){
    var valorFuturo, valorPresente, tasaInteres, result;

    valorPresente = document.getElementById("valorPresenteT").value;
    valorFuturo = document.getElementById("valorFuturoT").value;
    tasaInteres = document.getElementById("tasaInteresT").value;

    result = Math.round(parseFloat(((valorFuturo/valorPresente - 1)/tasaInteres)));

    document.getElementById("alertitaT").innerHTML = "El tiempo es de: <strong>" + result + "</strong> meses";
    document.getElementById("notificacionT").style.display = "block";
}

//Funciones para verificar que el usuario haya llenado los campos en cada formulario
/*function verificarVF(){
    valorPresente = document.getElementById("valorPresente").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    if((valorPresente === "") || (tasaInteres === "") || (tiempo === "")){
        return true;
    }
}*/

/*function verificarVP(){
    valorFuturo = document.getElementById("valorFuturo").value;
    tasaInteres = document.getElementById("tasaInteres").value;
    tiempo = document.getElementById("tiempo").value;

    if((valorFuturo === "") || (tasaInteres === "") || (tiempo === "")){
        return true;
    }
}*/

//## Funcion para limpiar los campos de cada formulario##

function limpiarVP(){
    document.getElementById("valorFuturo").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("tiempo").value = "";
    document.getElementById("alertitaVP").innerHTML = "";
    document.getElementById("notificacionVP").style.display = "none";
}

function limpiarVF(){
    document.getElementById("valorPresente").value = "";
    document.getElementById("tasaInteresVF").value = "";
    document.getElementById("tiempoVF").value = "";
    document.getElementById("alertitaVF").innerHTML = "";
    document.getElementById("notificacionVF").style.display = "none";
}

function limpiarI(){
    document.getElementById("valorPresenteI").value = "";
    document.getElementById("tasaInteresI").value = "";
    document.getElementById("tiempoI").value = "";
    document.getElementById("alertitaI").innerHTML = "";
    document.getElementById("notificacionI").style.display = "none";
}

function limpiarTI(){
    document.getElementById("valorPresenteTI").value = "";
    document.getElementById("valorFuturoTI").value = "";
    document.getElementById("tiempoTI").value = "";
    document.getElementById("alertitaTI").innerHTML = "";
    document.getElementById("notificacionTI").style.display = "none";
}

function limpiarT(){
    document.getElementById("valorPresenteT").value = "";
    document.getElementById("valorFuturoT").value = "";
    document.getElementById("tasaInteresT").value = "";
    document.getElementById("alertitaT").innerHTML = "";
    document.getElementById("notificacionT").style.display = "none";
}