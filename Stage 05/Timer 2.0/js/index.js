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


playButton.addEventListener("click", () => {
  counter = setInterval(() => {
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
  resetAudio()
  clearInterval(counter)
})

plusButton.addEventListener("click", () => {
  minutes.textContent = Number(minutes.textContent) + 5
})

minusButton.addEventListener("click", () => {
  minutes.textContent = Number(minutes.textContent) - 5
})
