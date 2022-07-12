// * Minutes and Seconds

let minutesDisplay = document.querySelector(".minutesDisplay")
let secondsDisplay = document.querySelector(".secondsDisplay")

// * Play

const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector(".pause-button")

// * Timer

const playTimer = document.querySelector(".play-timer")
const pauseTimer = document.querySelector(".pause-timer")

// * Sound

const playSound = document.querySelector(".play-sound")
const pauseSound = document.querySelector(".pause-sound")

// * Buttons

const play = document.querySelector("#play")
const timer = document.querySelector("#timer")
const sound = document.querySelector("#sound")

let minutes
let counter

// * Events

playButton.addEventListener('click', () => {
  
  playButton.classList.add('hidden')
  pauseButton.classList.remove('hidden')
  playTimer.classList.add('hidden')
  pauseTimer.classList.remove('hidden')

  counter = setInterval(() => {
    if (secondsDisplay.textContent == 0) {
      minutesDisplay.textContent = Number(minutesDisplay.textContent) - 1
      secondsDisplay.textContent += Number(secondsDisplay.textContent) + 60
    }
    secondsDisplay.textContent = String(Number(secondsDisplay.textContent) - 1).padStart(2, '0')
  }, 1000);
})


pauseButton.addEventListener('click', () => {
  pauseButton.classList.add('hidden')
  playButton.classList.remove('hidden')
  clearInterval(counter)
})


playTimer.addEventListener('click', () => {
  minutes = Number(prompt('Digite o Número'))
  minutesDisplay.textContent = minutes
})


pauseTimer.addEventListener('click', () => {
  pauseTimer.classList.add('hidden')
  playTimer.classList.remove('hidden')
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')

  clearInterval(counter)

  secondsDisplay.textContent = '00'
  minutesDisplay.textContent = minutes || 25
})


playSound.addEventListener('click', () => {
  playSound.classList.add('hidden')
  pauseSound.classList.remove('hidden')
})


pauseSound.addEventListener('click', () => {
  pauseSound.classList.add('hidden')
  playSound.classList.remove('hidden')
})




// * callback - chamar uma função a partir de um evento, não acontece na hora
// * refatorar não é prazeroso, mas bastante necessário