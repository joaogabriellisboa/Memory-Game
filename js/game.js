const grid = document.querySelector('.grid');
const spanPlayer= document.querySelector('.player')
const timer = document.querySelector('.timer')


const personagens = [
    'Arthur',
    'bogota',
    'Denver',
    'manila',
    'Moscou',
    'Nairobi',
    'Professor',
    'Raquel',
    'rio',
    'tokio',
]


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


let firstCard = '';
let secondCard = '';

const checkEndGame = () =>{
    const disabledCards= document.querySelectorAll('.disabled-card');

    if(disabledCards.length === 20 && timer.innerHTML <60){
        clearInterval(this.loop)
        alert(`Parabéns ${spanPlayer.innerHTML}, Você Terminou o jogo em ${timer.innerHTML} segundos!`)
    }else if(disabledCards.length === 20 && timer.innerHTML >60){
        clearInterval(this.loop)
        alert(`Caramba ${spanPlayer.innerHTML} tu é muito lento(a), Você demorou mais de 1min, você demorou: ${timer.innerHTML} segundos!, Tente novamente!`)
    }
}

const checkCards = () => {

    const firstPersonagem = firstCard.getAttribute('data-personagem')
    const secondPersonagem = secondCard.getAttribute('data-personagem')

    if (firstPersonagem === secondPersonagem) {

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()
    }
    else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = ''
            secondCard = ''

        }, 500);

    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;

    }
    checkCards()


}

const creatCard = (personagem) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${personagem}.png')`;


    card.appendChild(front) /* appendChild serve para dizer que é uma div Filha*/
    card.appendChild(back);


    card.addEventListener('click', revealCard)
    card.setAttribute('data-personagem', personagem)


    return card
}


const loadGame = () => {

    const duplicar = [...personagens, ...personagens]

    const embaralharArray = duplicar.sort(() => Math.random() - 0.5)


    embaralharArray.forEach((personagens) => {

        const card = creatCard(personagens);
        grid.appendChild(card);

    });
}

const startTimer = () =>{

    this.loop = setInterval(()=>{

    const currentTime=  +timer.innerHTML;
    timer.innerHTML= currentTime + 1
    },1000)

}

window.onload = () =>{
    spanPlayer.innerHTML = localStorage.getItem('player')
    startTimer()
    loadGame()
   
}

