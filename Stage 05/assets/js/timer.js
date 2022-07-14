function reduceHours() {
  if (minutesDisplay.textContent == '00' && secondsDisplay.textContent == '00') {
    hoursDisplay.textContent = Number(hoursDisplay.textContent) - 1
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 60
  }
}

function reduceMinutes() {
  if (secondsDisplay.textContent == '00') {
    if (!hoursDisplay) {
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



function createHours() {
  if (minutes >= 60) {
    if (validateHoursExist === false) {
      validateHoursExist = true
      hoursDisplay = document.createElement('span')
      pointHours = document.createElement('span')
      pointHours.textContent = ":"
      showTimer.insertBefore(pointHours, minutesDisplay)
      showTimer.insertBefore(hoursDisplay, pointHours)
    }
    hoursDisplay.textContent = Math.floor(minutes / 60)
    minutesHours = Number(minutes) % 60
    minutesDisplay.textContent = String(minutesHours).padStart(2, '0')
  }
}

function minutesWithoutHours() {
  if (minutes < 60) {
    minutesDisplay.textContent = minutes
    pointHours.remove()
    hoursDisplay.remove()
    validateHoursExist = false
  }
}


