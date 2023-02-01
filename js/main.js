const segundosPomodoro = 4000 //25*60*1000;
const disparador = document.querySelector('#disparador');

disparador.addEventListener('click', () => {
    console.log('Pomodoro ativado')
    setTimeout(() => {
        alert("O seu tempo do pomodoro acabou!");
    }, segundosPomodoro)
})
