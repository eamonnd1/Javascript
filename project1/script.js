const colourBtn = document.querySelector('.colourChange')
const bg = document.querySelector('body')
let hexCode = document.querySelector('.hexCode')

const hexNums = ['0','1','3','4','5','6','7','8','9','A','B','C','D','E','F']

colourBtn.addEventListener('click', changeColour)

function changeColour () {
    let bgColour = '#'
    for(i=0; i<6; i++){
        let rnd = Math.floor(Math.random()*hexNums.length)
        bgColour += hexNums[rnd]
        console.log(bgColour);
    }
    bg.style.background = bgColour
    hexCode.innerHTML = bgColour
}

