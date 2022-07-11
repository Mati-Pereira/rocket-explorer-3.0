let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")

let playButton = document.querySelector(".play-button")
let pauseButton = document.querySelector(".pause-button")

let playTimer = document.querySelector(".play-timer")
let pauseTimer = document.querySelector(".pause-timer")

let playSound = document.querySelector(".play-sound")
let pauseSound = document.querySelector(".pause-sound")

let play = document.querySelector(".play")
let timer = document.querySelector(".timer")
let sound = document.querySelector(".sound")

play.addEventListener('click', () => {
  playButton.classList.toggle('hidden')
  pauseButton.classList.toggle('hidden')
})

timer.addEventListener('click', () => {
  playTimer.classList.toggle('hidden')
  pauseTimer.classList.toggle('hidden')
})

sound.addEventListener('click', () => {
  playSound.classList.toggle('hidden')
  pauseSound.classList.toggle('hidden')
})