const segundosPomodoro = 4000 //25*60*1000;
const disparador = document.querySelector('#disparador');

disparador.addEventListener('click', () => {
    console.log('Pomodoro ativado')
    setTimeout(() => {
        alert("O seu tempo do pomodoro acabou!");

        clearInterval(contador);
    }, segundosPomodoro)

    let contador = setInterval('contadorDeSegundos()', 1000)
})


function contadorDeSegundos() {
    console.log('tic')
}