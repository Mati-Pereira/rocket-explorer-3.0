function Controls({
  secondsDisplay,
  minutesDisplay,
  pointHoursDisplay,
  hoursDisplay,
  validateHoursDisplayExist,
  pauseButton,
  setTimer,
  resetTimer,
  playButton
}) {

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

  function changeIcons() {
    playButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
    setTimer.classList.add('hidden')
    resetTimer.classList.remove('hidden')
  }

  return {
    resetIcons,
    resetValues,
    changeIcons
  }
}

export default Controls