
// * Minutes and Seconds
let minutesDisplay = document.querySelector(".minutesDisplay")
let secondsDisplay = document.querySelector(".secondsDisplay")

// * Play
const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector(".pause-button")

// * Timer
const setTimer = document.querySelector(".play-timer")
const resetTimer = document.querySelector(".pause-timer")

// * Sound
const playSound = document.querySelector(".play-sound")
const pauseSound = document.querySelector(".pause-sound")

// * Buttons
const play = document.querySelector("#play")
const timer = document.querySelector("#timer")
const sound = document.querySelector("#sound")
const showTimer = document.querySelector("#showTimer")

// * Variables that I have used
let minutes
let counter
let hoursDisplay
let pointHours // dois pontos para horas - two points for hoursDisplay
let validateHoursExist = false
let minutesHours // minutos se os valor setado der pelo menos mais de uma hora - minutes if the set value is at least more than one hour

// * Events

setTimer.addEventListener('click', () => {
  minutes = Number(prompt('Digite Quantos Minutos Para o Contador')) || '25'
  createHours()
  minutesWithoutHours()
})

resetTimer.addEventListener('click', () => {
  clearInterval(counter)
  resetIcons()
  resetValues()
})

playButton.addEventListener('click', () => {
  playIcons()
  counter = setInterval(() => {
    reduceHours()
    reduceMinutes()
    reduceSeconds()
    resetClock() // when it reaches zero
  }, 1000);
})

pauseButton.addEventListener('click', () => {
  pauseIcons()
  clearInterval(counter)
})

// * callback - chamar uma função a partir de um evento, não acontece na hora
// * refatorar não é prazeroso, mas bastante necessário