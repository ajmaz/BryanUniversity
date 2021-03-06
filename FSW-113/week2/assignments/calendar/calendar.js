// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

const today = new Date()
const month = today.getMonth()
let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8:
    case 10:
        days = 30
        break
    default:
        days = 31
}

let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while (dt < days)

const monthName = today.toLocaleDateString('default', { month: 'long' })
const year = today.getFullYear()

document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while (y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}




let printCalendar = () => { 
    let monthOption = document.querySelector("#monthSelect");
    document.querySelector("#calendarDays").innerHTML = "";

    today.setFullYear(document.getElementById("year").value, monthOption.value, 1)

    const month = today.getMonth()
    let days
    switch (month) {
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10:
            days = 30
            break
        default:
            days = 31
    }
       let x
       const weekday = today.getDay()
       for (x = 0; x < weekday; x++){
           document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
       }
       
       let dt = 0
       do {
           dt++
           document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
       } while ( dt < days)
       
       const monthName = today.toLocaleDateString('default', {month:'long'})
       const year = today.getFullYear()
       console.log(monthName)
       document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`
       
       const remainder = (7 - ((x + dt) % 7))
       let y = 0
       while ( y < remainder) {
           document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
           y++
       }
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for (let i = 0; i < months.length; i++) {
    let x = document.querySelector("#monthSelect")
    var option = document.createElement("option")
    option.innerHTML = months[i]
    option.value = i
    x.add(option)
}



var button = document.querySelector(".button")
button.addEventListener("click", function () {
    printCalendar()
})



