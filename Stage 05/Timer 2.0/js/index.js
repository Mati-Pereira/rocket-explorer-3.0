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

floresta.addEventListener('mouseover', (e) => {
  florestaSound.classList.add("hidden")
  florestaHover.classList.remove("hidden")
})

floresta.addEventListener('mouseout', () => {
  florestaSound.classList.remove("hidden")
  florestaHover.classList.add("hidden")
})

chuva.addEventListener('mouseover', (e) => {
  chuvaSound.classList.add("hidden")
  chuvaHover.classList.remove("hidden")
})

chuva.addEventListener('mouseout', () => {
  chuvaSound.classList.remove("hidden")
  chuvaHover.classList.add("hidden")
})

cafeteria.addEventListener('mouseover', (e) => {
  cafeteriaSound.classList.add("hidden")
  cafeteriaHover.classList.remove("hidden")
})

cafeteria.addEventListener('mouseout', () => {
  cafeteriaSound.classList.remove("hidden")
  cafeteriaHover.classList.add("hidden")
})

lareira.addEventListener('mouseover', (e) => {
  lareiraSound.classList.add("hidden")
  lareiraHover.classList.remove("hidden")
})

lareira.addEventListener('mouseout', () => {
  lareiraSound.classList.remove("hidden")
  lareiraHover.classList.add("hidden")
})

