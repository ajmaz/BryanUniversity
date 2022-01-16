const newList = document.createElement("ul");
newList.className = ("h2 list");
document.body.appendChild(newList);

const h2 = ['Title I', 'Title II', 'Title III', ' Title IV', 'Title V']

for (i = 0; i < h2.length ; i++){
    var newHeader = document.createElement("h2");
    newHeader.className = "header"
    newHeader.classList += " border"
    newHeader.textContent = h2[i]
    var style = newHeader.style
    style.fontSize = "20px"
    style.fontWeight = "lighter"
    style.fontFamily = "sans-serif"
    style.color = "cornflowerblue"

    newList.append(newHeader)
}

