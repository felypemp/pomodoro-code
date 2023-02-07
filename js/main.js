const milissegundosPomodoro = 4000 //25*60*1000;
const disparador = document.querySelector('#disparador');
let milissegundosRestantes = milissegundosPomodoro - 1000;
let contador;

disparador.addEventListener('click', () => {
    console.log('Pomodoro ativado')

    console.log('Faltam', milissegundosPomodoro/1000)

    contador = setInterval('contadorDeSegundos()', 1000)
})


function contadorDeSegundos() {
    if (milissegundosRestantes == 0) {
        alert("O seu tempo do pomodoro acabou!");
        clearInterval(contador);
    } else {
        console.log('Faltam', milissegundosRestantes/1000)
    }

    milissegundosRestantes -= 1000;
}