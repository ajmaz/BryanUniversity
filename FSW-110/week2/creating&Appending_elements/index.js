var newH1 = document.createElement("h1");
newH1.textContent = "Welcome to my JS site";
document.body.appendChild(newH1);


var newP = document.createElement("p");
newP.textContent = "All of this was created with Javascript";
document.body.appendChild(newP)


var newList = document.createElement("ol");

var li1 = document.createElement("li");
li1.textContent = "First list item";

var li2 = document.createElement("li"); 
li2.textContent = "Second list item";

var li3 = document.createElement("li"); 
li3.textContent = "Third list item";


newList.appendChild(li1);
newList.appendChild(li2);
newList.appendChild(li3);
document.body.appendChild(newList)





