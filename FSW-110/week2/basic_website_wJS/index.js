var navbar = document.createElement("div");
navbar.id = "links";

var link1 = document.createElement("a");
link1.href = "https://www.amazon.com";
link1.textContent = "Amazon";

var link2 = document.createElement("a");
link2.href = "https://www.google.com";
link2.textContent = "Google";

var link3 = document.createElement("a");
link3.href = "https://www.facebook.com";
link3.textContent = "FaceBook"

navbar.appendChild(link1)
navbar.appendChild(link2)
navbar.appendChild(link3)
document.body.appendChild(navbar)

var header = document.createElement("h1");
header.textContent = "PROJECT";
document.body.appendChild(header);

var paragraph = document.createElement("p");
paragraph.textContent = "Being able to learn to manipulate html text using DOM thru javascript is an exciting, and very frustrating journey";
document.body.appendChild(paragraph);

var list = document.createElement("ol");
list.textContent = "THINGS TO KEEP IN MIND";
var li1 = document.createElement("li");
li1.textContent = "Javascript needs patience";
var li2 = document.createElement("li");
li2.textContent = "Knowledge in javascript is rewarding";
var li3 = document.createElement("li");
li3.textContent = "Problem solving measures are somewhat fun";

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
document.body.appendChild(list);

var footer = document.createElement("footer");

var info = document.createElement("p");
info.textContent = "Name: Adam Mazloum";

var webInfo = document.createElement("a")
webInfo.href= "https://github.com/ajmaz/BryanUniversity"
webInfo.textContent = " My School Github"

footer.appendChild(info);
footer.appendChild(webInfo);
document.body.appendChild(footer)
