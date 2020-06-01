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
$botonComenzar.addEventListener('click', ejecutarJuego);