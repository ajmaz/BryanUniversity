// Declare any necessary variables.
const studentName = document.getElementById("studentName")
const className = document.getElementById("className")
const studentScores = document.getElementById("studentScores")
const possibleScores = document.getElementById("possibleScores")

var nameOnCertificate = document.getElementById('certStudentName')
var classOnCertificate = document.getElementById('certClassName')
var gradeOnCertificate = document.getElementById('certGrade')

// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
const printButton = document.getElementById("print")
printButton.addEventListener('click', function () {
    nameOnCertificate.textContent = studentName.value;
    classOnCertificate.textContent = className.value;
    let student = newStudent();
    let scoresSum = student.sumScores();
    let PossibleSum = student.sumPossibleScore()
    gradeOnCertificate.textContent = student.finalScore()

}) 


// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
const resetButton = document.getElementById("reset")
resetButton.addEventListener('click', function () {
    let certData = document.querySelectorAll('.cert-data')
    certData.forEach(field => {
        field.innerHTML = "&nbsp;"
    });

    let inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.value = ""
    })

})

// Create a function that instantiates a new student object with the input from the HTML form.

function newStudent() {
    return student = new studentObj(
        studentName.value,
        className.value,
        studentScores.value,
        possibleScores.value
    )
}




// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.

// You can use this function when instantiating the arrays in the student object.