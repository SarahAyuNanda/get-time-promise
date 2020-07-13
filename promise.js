const isTime = (time) => new Promise((resolve, reject) => {
    let value = false
    setTimeout(() => {
        if (isNaN(time)) {
            check = `is ${time} a number in time? ${value}\nUse number in time!`
            reject(check)
        } else if (Math.sign(time) < 0) {
            check = `is ${time} a number in time? ${value}\nTime must be a positive number!`
            reject(check)
        } else if (time > 24) {
            check = `is ${time} a number in time? ${value}\nInvalid time, there's only 24 hours in a day!`
            reject(check)
        } else {
            resolve(true)
        }
    }, 1000)
})

const myPromise = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (time >= 7 && time <= 11) {
            statement = "I'm coming!"
            resolve(statement)
        } else {
            statement = "Sorry, I can't go."
            reject(statement)
        }
    }, 1200)
})

function myDecision() {
    timeSchedule = 8
    console.log(`I got invitation at ${timeSchedule} o'clock.`)
    isTime(timeSchedule)
        .then((isTime) => {
            if (isTime == true) {
                console.log(`is ${timeSchedule} a number in time? ${isTime}.`)
                return myPromise(timeSchedule)
            }
        })
        .catch((invalid) => {
            console.log(invalid)
        })
}
myDecision()
