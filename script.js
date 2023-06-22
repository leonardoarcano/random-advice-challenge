
const adviceButton = document.querySelector('.botao');
const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');

adviceButton.addEventListener('click', () => {
    getAdvice()
})

window.onload = getAdvice();


function getAdvice(){

    fetch('https://api.adviceslip.com/advice?t='+ Math.random()).then(response => {
    return response.json();
}).then(adviceData =>{
    const advice = adviceData.slip;
    adviceId.innerHTML = advice.id;
    adviceText.innerHTML = `" ${advice.advice} "`
}).catch(error =>{
    console.log(`Um erro ocorreu, tente novamente mais tarde. Detalhes: ${error}`)
})

}

