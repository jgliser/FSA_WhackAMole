
const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
/*sets the score to 0*/
const scoreEL =document.querySelector('.score span')
let score = 0
/*adds sound*/
const sound = new Audio('Resources/mudkip2.mov')
/*creates a mole in a random hole*/
function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'Resources/mole.png'
    img.addEventListener('click', () => {
        score++
        sound.play()
        scoreEL.textContent = score
        img.src = 'Resources/mole-whacked.png'
        clearTimeout(timer)
        setTimeout (() => {
            hole.removeChild(img)
            run()
        },  150)
    })
    hole.appendChild(img)
    timer = setTimeout (() => {
        hole.removeChild(img)
        run()
    },  1500)
}

/*adds the cursor image to the cursor*/
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
/*creates class active during mousedown, which rotates cursor image via css*/
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
/*removes class active during mouseup, so cursor image returns to OG state*/
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})
run()
