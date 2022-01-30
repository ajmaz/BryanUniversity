var button = document.getElementById("button");

var firstInput = document.getElementById("first");
var lastInput = document.getElementById("last");
var ageInput = document.getElementById("age");



// This will not display information if something is missing.
/*
button.addEventListener("click", function(event) {
if (firstInput.value == "" || lastInput.value == "" || ageInput.value == "")
alert("Please provide additional information")
else
alert(firstInput.value +" "+ lastInput.value + " is " + ageInput.value + " years old.")
})
*/


button.addEventListener("click", function(event) {

alert(firstInput.value +" "+ lastInput.value + " " + ageInput.value)
})
