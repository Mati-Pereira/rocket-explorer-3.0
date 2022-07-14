import Controls from './controls'
import Timer from './timer'

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
let pointHoursDisplay // dois pontos para horas - two points for hoursDisplay
let validateHoursDisplayExist = false
let minutesHoursDisplay // minutos se os valor setado der pelo menos mais de uma hora - minutes if the set value is at least more than one hour

// * instantiating my fabrics

const timerIns = Timer({
  reduceHoursDisplay,
  reduceMinutes,
  reduceSeconds,
  pauseClock,
  createHoursDisplay,
  minutesWithoutHoursDisplay,
  resetClock
})

const controlsIns = Controls({
  resetIcons,
  resetValues,
  changeIcons
})

// * Events

setTimer.addEventListener('click', () => {
  minutes = Number(prompt('Digite Quantos Minutos Para o Contador')) || '25'
  timerIns.createHoursDisplay()
  timerIns.minutesWithoutHoursDisplay()
})

resetTimer.addEventListener('click', () => {
  timerIns.pauseClock()
  controlsIns.resetIcons()
  controlsIns.resetValues()
})

playButton.addEventListener('click', () => {
  controlsIns.changeIcons()
  counter = setInterval(() => {
    timerIns.reduceHoursDisplay()
    timerIns.reduceMinutes()
    timerIns.reduceSeconds()
    timerIns.resetClock()
  }, 1000);
})




// * callback - chamar uma função a partir de um evento, não acontece na hora
// * refatorar não é prazeroso, mas bastante necessário