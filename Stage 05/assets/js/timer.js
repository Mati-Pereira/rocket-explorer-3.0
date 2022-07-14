import Controls from './controls'

const control = Controls({
  resetIcons,
  resetValues
})

function Timer({
  minutesDisplay,
  secondsDisplay,
  hours,
  validateHoursExist,
  minutes,
  pointHours,
  showTimer,
  minutesHours,
  counter
}) {

  function reduceHours() {
    if (minutesDisplay.textContent == '00' && secondsDisplay.textContent == '00') {
      hours.textContent = Number(hours.textContent) - 1
      minutesDisplay.textContent = Number(minutesDisplay.textContent) + 60
    }
  }

  function reduceMinutes() {
    if (secondsDisplay.textContent == '00') {
      if (!hours) {
        minutesDisplay.textContent = Number(minutesDisplay.textContent) - 1
      } else {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 1).padStart(2, '0')
      }
      secondsDisplay.textContent += Number(secondsDisplay.textContent) + 60
    }
  }

  function reduceSeconds() {
    secondsDisplay.textContent = String(Number(secondsDisplay.textContent) - 1).padStart(2, '0')
  }

  function pauseClock() {
    clearInterval(counter)
  }

  function createHours() {
    if (minutes >= 60) {
      if (validateHoursExist === false) {
        validateHoursExist = true
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

  function minutesWithoutHours() {
    if (minutes < 60) {
      minutesDisplay.textContent = minutes
      pointHours.remove()
      hours.remove()
      validateHoursExist = false
    }
  }

  function resetClock() {
    if ((secondsDisplay.textContent === '00' && minutesDisplay.textContent === '0') ||
      (minutesDisplay.textContent === '00' && secondsDisplay.textContent === '00' && hours.textContent === '0')) {
      clearInterval(counter)
      control.resetIcons()
      control.resetValues()
    }
  }

  return {
    reduceHours,
    reduceMinutes,
    reduceSeconds,
    pauseClock,
    createHours,
    minutesWithoutHours,
    resetClock
  }
}

export default Timer