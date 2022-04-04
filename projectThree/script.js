const prev = document.querySelector('#prevBtn')
const next = document.querySelector('#nextBtn')
const galImage = document.querySelector('.images')

let counter = 0


next.addEventListener('click', nextImage)
prev.addEventListener('click', prevImage)

function nextImage () {
    if (counter === 3) {
        counter = -1
    }
    counter ++
    let photo = galImage.style.backgroundImage = `url(images/bg-${counter}.jpg)`
    photo.style.width = '10px'
}

function prevImage () {
    if (counter === 0 ) {
        counter = 4
    }
    counter --
    galImage.style.backgroundImage = `url(images/bg-${counter}.jpg)`
}