const $botonComenzar = document.querySelector('#btn-comenzar');
let juegoComputadora;//array con el juego de la compu. 
let $turno = document.querySelector('.turno');
let ronda;
let cantidadDeClicksUsuario;
let arrayDePanelesClickeados;//aux
let tiempoDeCambio;//tiempo del setTimeOut
let todosLosPanelesClickeados = [];//contiene el array del juego del usuario
let sonidos = ['audio-1', 'audio-2', 'audio-3', 'audio-4'];

$botonComenzar.addEventListener('click', ejecutarJuego);
function ejecutarJuego(){
    arrayDePanelesClickeados= [];
    cantidadDeClicksUsuario = 0;
    ronda = 0;
    juegoComputadora = [];
    bloquearUsuario();
    jugarComputadora();
}

function jugarComputadora(){
    cambiarMensaje("Jugando computadora...");
    ronda ++;
    tiempoDeCambio = ronda * 800;
    let numeroPanel = obtenerNumeroAleatorio();
    juegoComputadora.push(`opcion-${numeroPanel}`);
    marcarTablero(juegoComputadora);
    setTimeout(function(){
        desbloquearUsuario()
   }, tiempoDeCambio);   
}

function marcarTablero(juego){
    for(let i=0; i<juego.length; i++){
            let panelAMarcar = document.querySelector(`.${juego[i]}`);
        if(juego[i] === "opcion-1"){
            setTimeout(function(){
                colorear("#F2388F", "#FEBCB9", panelAMarcar, sonidos[0]);
            },i*1000);  
        }
        else if(juego[i] === "opcion-2"){
            setTimeout(function(){
                colorear("#049DD9", "#8DE7F5", panelAMarcar,sonidos[1]);
            }, i*1000);
        }
        else if(juego[i] === "opcion-3"){
            setTimeout(function(){
                colorear("#65E01D", "#C9FF85", panelAMarcar, sonidos[2]);
            }, i*1000);   
        }
        else{
            setTimeout(function(){
                colorear("#FFE110", "#FFF9A3", panelAMarcar, sonidos[3]);
            }, i*1000); 
        }
    }
}

function colorear(colorNuevo, colorAnterior, elemento, sonido){
    setTimeout(function(){ 
        elemento.style.background = colorNuevo;
        document.querySelector(`.${sonido}`).play();
    }, 100);
    setTimeout(function(){
        elemento.style.background = colorAnterior;
    }, 800);
}

function cambiarMensaje(mensaje){
    $turno.textContent = mensaje;
}

function bloquearUsuario(){
    document.querySelectorAll('.panel').forEach(function($miPanel){
        $miPanel.onclick = function(){};
        $miPanel.style.cursor = 'none';
    });
}

function desbloquearUsuario(){
    cambiarMensaje('Turno del jugador');
    todosLosPanelesClickeados=[];
    arrayDePanelesClickeados = [];
    cantidadDeClicksUsuario=0;
    document.querySelectorAll('.panel').forEach(function($miPanel){
        $miPanel.onclick = jugarUsuario;
        $miPanel.style.cursor = 'pointer';
    });
}

function jugarUsuario(e){
    arrayDePanelesClickeados = [];
    cantidadDeClicksUsuario++;
    let panelClickeado = e.target;
    panelClickeado = panelClickeado.classList[2];
    arrayDePanelesClickeados.push(panelClickeado);//contiene sólo el último
    todosLosPanelesClickeados.push(panelClickeado);//contiene todos
    marcarTablero(arrayDePanelesClickeados);
    if(!perdioUsuario(todosLosPanelesClickeados, juegoComputadora) && (cantidadDeClicksUsuario == ronda)){
        bloquearUsuario();
        setTimeout(function(){
            jugarComputadora();
            cambiarMensaje('Turno de la compu');
        }, 1200)
    }

    if(perdioUsuario(todosLosPanelesClickeados, juegoComputadora)){
        cambiarMensaje(`Perdiste con ${ronda-1} puntos, pulsá comenzar para empezar de nuevo`);
        bloquearUsuario();
    };
}

function obtenerNumeroAleatorio(){
    return(parseInt(Math.random()*(5-1)+1));
}

function perdioUsuario(arrayUsuario, arrayCompu){
    let contadorDiferentes = 0;
    for(let i=0; i<arrayUsuario.length; i++){
        if(arrayCompu[i] !== arrayUsuario[i]){
            contadorDiferentes++;
            break;
        }
    }
    return contadorDiferentes !== 0;
}
