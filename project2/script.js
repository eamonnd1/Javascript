const quotes = [
    {
        person:'Stephen King',
        quote:'Get busy living or get busy dying.'
    },
    {
        person:'JFK',
        quote:'Those who dare to fail miserably can achieve greatly.'
    },
    {
        person:'Leo Tolstoy',
        quote:'If you want to be happy, be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn')
const quote = document.querySelector('#quote')
const quoteAuthor = document.querySelector('#quoteAuthor')

quoteBtn.addEventListener('click', addQuote)

function addQuote () {
    const rnd = Math.floor(Math.random()*quotes.length)
    quote.innerHTML = quotes[rnd].quote
    quoteAuthor.innerHTML = quotes[rnd].person
}

