let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let count = 0
let countGuest = 0

function increment1Home() {
    count += 1
    homeScoreEl.textContent = count
}

function increment2Home() {
    count += 2
    homeScoreEl.textContent = count
}

function increment3Home() {
    count += 3
    homeScoreEl.textContent = count
}


function increment1Guest() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function increment2Guest() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
}

function increment3Guest() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
}

// function actionFunction(random, callingFor) {
//     let value = random;
//
//     if (callingFor == "home") {
//         var pravash = "home-score"
//         console.log(pravash)
//     } else {
//         var pravash = "guest-score"
//     }
//
//     let existingValue = document.getElementById(pravash).textContent
//     document.getElementById(pravash).textContent = parseInt(existingValue) + parseInt(value)
// }