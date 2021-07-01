const character = document.getElementById('character')
const quote = document.getElementById('quote')
const characterImage = document.getElementById('charImg')

function getQuote(){
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res => res.json())
    .then(function (data){
        console.log(data[0]['quote']);
        console.log(data[0]['author']);
        quote.innerHTML = data[0]['quote'];
        character.innerHTML = data[0]['author'];
        if (character.innerHTML == 'Walter White'){
            characterImage.src = "images/walter.jpg"
        } else if (character.innerHTML == 'Skyler White') {
            characterImage.src = "images/skyler.jpg"
        } else if (character.innerHTML == 'Jesse Pinkman') {
            characterImage.src = "images/jesse.jpg"
        } else if (character.innerHTML == 'Hank Schrader') {
            characterImage.src = "images/hank.jpg"
        } else if (character.innerHTML == 'Saul Goodman') {
            characterImage.src = "images/saul.jpg"
        } else if (character.innerHTML == 'Mike Ehrmantraut') {
            characterImage.src = "images/mike.jpg"
        } else if (character.innerHTML == 'Gustavo Fring') {
            characterImage.src = "images/gustavo.jpg"
        } else if (character.innerHTML == 'Badger') {
            characterImage.src = "images/badger.jpg"
        } else if (character.innerHTML == 'The fly') {
            characterImage.src = "images/fly.jpg"
        }
        

    })

}

getQuote();