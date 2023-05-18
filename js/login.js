const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')

function validadeInput ({target}){
    if (target.value.length > 3 ){
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled' , '')
    }
}

const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('player' , input.value);
    window.location = 'pages/game.html'
}


input.addEventListener('input', validadeInput)
form.addEventListener('submit' , handleSubmit)
