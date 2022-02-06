
let box = document.querySelector(".red-box")

/*
function getPos(e){
    x=e.clientX;
    y=e.clientY;
    cursor="Your Mouse Position Is : " + x + " and " + y ;
    document.getElementById("displayArea").innerHTML=cursor
}

function stopTracking(){
    document.getElementById("displayArea").innerHTML="";
}
  
box.addEventListener("mouseover", getPos);
*/

function printMousePos(event) {
    box.textContent =
      "clientX: " + event.clientX +
      " - clientY: " + event.clientY;
  }
  
  box.addEventListener("mouseover", printMousePos);