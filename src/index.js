const $botonComenzar = document.querySelector('#btn-comenzar');
let juegoComputadora;
/*$botonComenzar.onclick = function(e){
    e.preventDefault();
    console.log("click");
}*/

function ejecutarJuego(){
    juegoComputadora = [];
    jugarComputadora();
}

function jugarComputadora(){
    let $turno = document.querySelector('.turno');
    let numeroPanel = obtenerNumeroAleatorio();
    console.log(numeroPanel);
    juegoComputadora.push(`opcion-${numeroPanel}`);
    console.log("Juego de computadora tiene " + juegoComputadora); 
    $turno.textContent = "Jugando computadora..."; 
    marcarTablero(juegoComputadora);
}

function marcarTablero(juego){
    console.log("entra a marcar tablero");
    for(let i=0; i<juego.length; i++){
        //document.querySelector(`.${juego[i]}`).innerHTML = "HOLA";
    }
}

function obtenerNumeroAleatorio(){
    return(parseInt(Math.random()*(5-1)+1));
}

$botonComenzar.addEventListener('click', ejecutarJuego);