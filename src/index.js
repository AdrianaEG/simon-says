const $botonComenzar = document.querySelector('#btn-comenzar');
let juegoComputadora;
let $turno = document.querySelector('.turno');
/*$botonComenzar.onclick = function(e){
    e.preventDefault();
    console.log("click");
}*/

function ejecutarJuego(){
    juegoComputadora = [];
    jugarComputadora();
    jugarUsuario();
}

function jugarComputadora(){
    $turno.textContent = "Jugando computadora...";
    let numeroPanel = obtenerNumeroAleatorio();
    juegoComputadora.push(`opcion-${numeroPanel}`);
    console.log('La jugada de la compu es ' + juegoComputadora);
    marcarTablero(juegoComputadora);
}

function jugarUsuario(){
    
}

function marcarTablero(juego){
    for(let i=0; i<juego.length; i++){
        let panelAMarcar = document.querySelector(`.${juego[i]}`);
        let sonidos = ['audio-1', 'audio-2', 'audio-3', 'audio-4'];
        if(juego[i] === "opcion-1"){
            colorear("#F2388F", "#FEBCB9", panelAMarcar, sonidos[0]);
        }
        else if(juego[i] === "opcion-2"){
            colorear("#049DD9", "#8DE7F5", panelAMarcar,sonidos[1]);
        }
        else if(juego[i] === "opcion-3"){
            colorear("#65E01D", "#C9FF85", panelAMarcar, sonidos[2]);
        }
        else{
            colorear("#FFE110", "#FFF9A3", panelAMarcar, sonidos[3]);
        }
    }
}

function colorear(colorNuevo, colorAnterior, elemento, sonido){
    setTimeout(function(){ 
        elemento.style.background = colorNuevo;
        document.querySelector(`.${sonido}`).play();
    }, 500);
    setTimeout(function(){
        elemento.style.background = colorAnterior;
    }, 1200);
}

function obtenerNumeroAleatorio(){
    return(parseInt(Math.random()*(5-1)+1));
}

$botonComenzar.addEventListener('click', ejecutarJuego);
