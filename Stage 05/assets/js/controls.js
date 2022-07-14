function resetIcons() {
  setTimer.classList.remove('hidden')
  resetTimer.classList.add('hidden')
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')
}

function resetValues() {
  secondsDisplay.textContent = '00'
  minutesDisplay.textContent = '25'
  pointHoursDisplay.remove()
  hoursDisplay.remove()
  validateHoursDisplayExist = false
}

function playIcons() {
  playButton.classList.add('hidden')
  pauseButton.classList.remove('hidden')
  setTimer.classList.add('hidden')
  resetTimer.classList.remove('hidden')
}

function pauseIcons() {
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')
  setTimer.classList.remove('hidden')
  resetTimer.classList.add('hidden')

}

function resetClock() {
  if ((secondsDisplay.textContent === '00' && minutesDisplay.textContent === '0') ||
    (minutesDisplay.textContent === '00' && secondsDisplay.textContent === '00' && hoursDisplay.textContent === '0')) {
    clearInterval(counter)
    resetIcons()
    resetValues()
  }
}

