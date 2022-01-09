for (i = 0; i < 10; i++){
var newH1 = document.createElement("h1");
newH1.textContent = "Hello World!"
newH1.style.color = "red"

document.body.appendChild(newH1)    
}


const newList = document.createElement("ul");
newList.id = ("list");
document.body.appendChild(newList);


const names = ['steve', "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for (i = 0; i < names.length ; i++){
    var newName = document.createElement("li");
    newName.textContent = names[i]
    newList.append(newName)
}