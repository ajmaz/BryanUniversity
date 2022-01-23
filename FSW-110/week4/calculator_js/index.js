
var addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (event) {
document.getElementById("result-add").value = Number (document.getElementById('add1').value) + Number(document.getElementById('add2').value)
})


var subBtn = document.getElementById("sub-btn");
subBtn.addEventListener("click", function (event) {
document.getElementById("result-sub").value = Number (document.getElementById('sub1').value) - Number(document.getElementById('sub2').value)
})



var multiplyBtn = document.getElementById("mlt-btn");
multiplyBtn.addEventListener("click", function (event) {
document.getElementById("result-mlt").value = Number (document.getElementById('mlt1').value) * Number(document.getElementById('mlt2').value)
})


var divideBtn = document.getElementById("div-btn");
divideBtn.addEventListener("click", function (event) {
document.getElementById("result-div").value = Number (document.getElementById('div1').value) / Number(document.getElementById('div2').value)
})