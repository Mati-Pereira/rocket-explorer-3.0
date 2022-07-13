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
const showTimer = document.querySelector("#showTimer")

let minutes
let counter
let hours
let pointHours
let validate = false
let minutesHours

// * Events

playButton.addEventListener('click', () => {

  playButton.classList.add('hidden')
  pauseButton.classList.remove('hidden')
  playTimer.classList.add('hidden')
  pauseTimer.classList.remove('hidden')

  counter = setInterval(() => {
    if (minutesDisplay.textContent == '00' && secondsDisplay.textContent == '00') {
      hours.textContent = Number(hours.textContent) - 1
      minutesDisplay.textContent = Number(minutesDisplay.textContent) + 60
    }
    if (secondsDisplay.textContent == '00') {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 1).padStart(2, '0')
      secondsDisplay.textContent += Number(secondsDisplay.textContent) + 60
    }

    secondsDisplay.textContent = String(Number(secondsDisplay.textContent) - 1).padStart(2, '0')

    if (minutesDisplay.textContent === '0' && secondsDisplay.textContent === '00' && hours.textContent === 0) {
      clearInterval(counter)
      resetIcons()
      resetValues()
    }

    console.log(typeof minutesDisplay.textContent, typeof secondsDisplay.textContent);

  }, 1000);

})

function resetIcons() {
  playTimer.classList.remove('hidden')
  pauseTimer.classList.add('hidden')
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')
}

function resetValues() {
  secondsDisplay.textContent = '00'
  minutesDisplay.textContent = '25'
  pointHours.remove()
  hours.remove()
  validate = false


  // createHours()
}

function createHours() {
  if (minutes >= 60) {
    if (validate === false) {
      validate = true
      hours = document.createElement('span')
      pointHours = document.createElement('span')
      pointHours.textContent = ":"
      showTimer.insertBefore(pointHours, minutesDisplay)
      showTimer.insertBefore(hours, pointHours)
    }
    hours.textContent = Math.floor(minutes / 60)
    minutesHours = Number(minutes) % 60
    minutesDisplay.textContent = String(minutesHours).padStart(2, '0')
  }
}

function pauseClock() {
  clearInterval(counter)
}


pauseButton.addEventListener('click', () => {
  pauseButton.classList.add('hidden')
  playButton.classList.remove('hidden')
  pauseClock()
})

playTimer.addEventListener('click', () => {
  minutes = Number(prompt('Digite Quantos Minutos Para o Contador'))
  createHours()
  if (minutes < 60) {
    minutesDisplay.textContent = minutes
    pointHours.remove()
    hours.remove()
    validate = false
  }
})

pauseTimer.addEventListener('click', () => {
  pauseClock()
  resetIcons()
  resetValues()
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