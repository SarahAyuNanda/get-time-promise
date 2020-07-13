let timeSchedule = 8
console.log(`I got invitation at ${timeSchedule} o'clock.`)

const isTime = (time) => new Promise((resolve, reject) => {
    let value = false
    setTimeout(() => {
        if (isNaN(time)) {
            check = `Is ${time} a number in time? ${value}\nUse number in time!`
            console.log(check)
            reject(value)
        } else if (Math.sign(time) < 0) {
            check = `Is ${time} a number in time? ${value}\nTime must be a positive number!`
            console.log(check)
            reject(value)
        } else if (time > 24) {
            check = `Is ${time} a number in time? ${value}\nInvalid time, there's only 24 hours in a day!`
            console.log(check)
            reject(value)
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

const myDecision = async function (timeSchedule) {
    const isTimeType = await isTime(timeSchedule)
    if (isTimeType === true) {
        console.log(`Is ${timeSchedule} a number in time? ${isTimeType}.`)
        const decision = await myPromise(timeSchedule)
        return decision
    }
}

myDecision(timeSchedule)
    .then((finalDecision) => {
        console.log(finalDecision)
    })
    .catch((invalid) => {
        console.log(invalid)
    })
