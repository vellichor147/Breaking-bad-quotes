const character = document.getElementById('character')
const quote = document.getElementById('quote')

function getQuote(){
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res => res.json())
    .then(function (data){
        console.log(data[0]['quote']);
        console.log(data[0]['author']);
        quote.innerHTML = data[0]['quote'];
        character.innerHTML = data[0]['author'];
    })

}

getQuote();