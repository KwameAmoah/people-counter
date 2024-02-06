//document.getElementById('count-el').innerText = 5;

//let firstBatch = 5
//let secondBatch = 10
//let count = firstBatch + secondBatch


//let count = 0
//count = count ++
//console.log(count)
//function increment() {}
// let welcomeEl = document.getElementById("welcome-el")

// let sign = "kwame Amoah"
// let greeting = "welcome to scrimba "
// let show = greeting + sign

// function message() {
//     welcomeEl.innerText = show
// }

// message()

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // count = count++
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    count = 0
    countEl.textContent = 0

    console.log(count)
}
