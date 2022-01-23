var square = document.createElement("div");
square.className = "square";
square.id = "square";

document.body.prepend(square);


window.addEventListener("load", function (event) {
    const square = document.getElementById("square");
    //Black upon complete loading of the HTML page
    square.style.backgroundColor = "black";

    //Green when the mouse hovers over the square
    square.addEventListener("mouseover", function (event) {
        square.style.backgroundColor = "green";
    });
    //Yellow when the mouse button is held down over the square
    square.addEventListener("mousedown", function (event) {
        square.style.backgroundColor = "yellow";
    });
    //Blue when the mouse button is let go over the square
    square.addEventListener("mouseup", function (event) {
        square.style.backgroundColor = "blue";
    });
    //Red when the mouse is double clicked in the square
    square.addEventListener("dblclick", function (event) {
        square.style.backgroundColor = "red";
    });
    //Purple when the mouse scroll is used somewhere in the window
    document.addEventListener("scroll", function (event) {
        document.getElementById("square").style.backgroundColor = "purple";
    });
})

document.addEventListener("keypress", function(event){
    if (event.key === "r"){
        square.style.backgroundColor = "red"
    }
})
document.addEventListener("keypress", function(event){
    if (event.key === "b"){
        square.style.backgroundColor = "blue"
    }
})
document.addEventListener("keypress", function(event){
    if (event.key === "g"){
        square.style.backgroundColor = "green"
    }
})
document.addEventListener("keypress", function(event){
    if (event.key === "p"){
        square.style.backgroundColor = "purple"
    }
})
document.addEventListener("keypress", function(event){
    if (event.key === "y"){
        square.style.backgroundColor = "yellow"
    }
})
document.addEventListener("keypress", function(event){
    if (event.key === "B"){
        square.style.backgroundColor = "black"
    }
})