// sounds

const floresta = document.querySelector(".floresta")
const chuva = document.querySelector(".chuva")
const cafeteria = document.querySelector(".cafeteria")
const lareira = document.querySelector(".lareira")

const florestaSound = document.querySelector(".florestaSound")
const chuvaSound = document.querySelector(".chuvaSound")
const cafeteriaSound = document.querySelector(".cafeteriaSound")
const lareiraSound = document.querySelector(".lareiraSound")

const florestaHover = document.querySelector(".florestaHover")
const chuvaHover = document.querySelector(".chuvaHover")
const cafeteriaHover = document.querySelector(".cafeteriaHover")
const lareiraHover = document.querySelector(".lareiraHover")

const minutesDisplay = document.querySelector(".minutesDisplay")
const secondsDisplay = document.querySelector(".secondsDisplay")

const playButton = document.querySelector(".playButton")
const stopButton = document.querySelector(".stopButton")
const plusButton = document.querySelector(".plusButton")
const minusButton = document.querySelector(".minusButton")


floresta.addEventListener('mouseover', () => {
  florestaSound.classList.add("hidden")
  florestaHover.classList.remove("hidden")
})


floresta.addEventListener('mouseout', () => {
  florestaSound.classList.remove("hidden")
  florestaHover.classList.add("hidden")
})


chuva.addEventListener('mouseover', () => {
  chuvaSound.classList.add("hidden")
  chuvaHover.classList.remove("hidden")
})


chuva.addEventListener('mouseout', () => {
  chuvaSound.classList.remove("hidden")
  chuvaHover.classList.add("hidden")
})


cafeteria.addEventListener('mouseover', () => {
  cafeteriaSound.classList.add("hidden")
  cafeteriaHover.classList.remove("hidden")
})


cafeteria.addEventListener('mouseout', () => {
  cafeteriaSound.classList.remove("hidden")
  cafeteriaHover.classList.add("hidden")
})


lareira.addEventListener('mouseover', () => {
  lareiraSound.classList.add("hidden")
  lareiraHover.classList.remove("hidden")
})


lareira.addEventListener('mouseout', () => {
  lareiraSound.classList.remove("hidden")
  lareiraHover.classList.add("hidden")
})


function resetAudio() {
  florestaAudio.pause()
  chuvaAudio.pause()
  cafeteriaAudio.pause()
  lareiraAudio.pause()
}


floresta.addEventListener('click', () => {
  resetAudio()
  florestaAudio.play()
})


chuva.addEventListener('click', () => {
  resetAudio()
  chuvaAudio.play()
})


cafeteria.addEventListener('click', () => {
  resetAudio()
  cafeteriaAudio.play()
})


lareira.addEventListener('click', () => {
  resetAudio()
  lareiraAudio.play()
})


let seconds = secondsDisplay
let minutes = minutesDisplay
let counter


playButton.addEventListener("click", () => {
  counter = setInterval(() => {
    console.log(typeof minutes.textContent, minutes.textContent, typeof seconds.textContent, seconds.textContent)
    if (seconds.textContent === '00') {
      seconds.textContent += Number(seconds.textContent) + 60
      minutes.textContent = Number(minutes.textContent) - 1
    }
    seconds.textContent = String(Number((seconds.textContent) - 1)).padStart(2, "0")
    if (Number(minutes.textContent) < 0) {
      clearInterval(counter)
      seconds.textContent = "00"
      minutes.textContent = "25"
    }
  }, 1000)
})


stopButton.addEventListener("click", () => {
  clearInterval(counter)
})

plusButton.addEventListener("click", () => {
  minutes.textContent = Number(minutes.textContent) + 5
})

minusButton.addEventListener("click", () => {
  minutes.textContent = Number(minutes.textContent) - 5
})
