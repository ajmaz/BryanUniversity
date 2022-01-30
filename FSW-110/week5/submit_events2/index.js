var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var btn = document.getElementById("btn");
var age = document.getElementById("age");
var brk = "\r\n"
var fav_col = "";
if(document.theForm.color.checked){
    fav_col = "Blue"
}
if(document.theForm.color1.checked){
    fav_col += "Green"
}

if(document.theForm.color.checked){
    fav_col += "Red"
}

btn.addEventListener("click", function(event) {
    alert("First name: " + fname.value + brk + 
    "Last name: " + lname.value + brk + 
    "Age: " + age.value + brk +
    "Return customer: " + document.theForm.answer.value + brk + 
    "How likely are you to refer us? " + document.theForm.referral.value + brk +
    "Favorite colors are: " + document.theForm.color.value)
})