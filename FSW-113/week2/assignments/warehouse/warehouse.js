const parts = [
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12 },
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12 },
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3 },
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1 },
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5 },
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2 },
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2 },
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16 },
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12 },
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12 },
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7 },
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4 },
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty: 3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1 },
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2 },
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12 },
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24 },
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7 },
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1 }

]



let quantity = 0
let b3Element = ""
let hazard = ""
let smallItems = true
let largeItems = false

parts.forEach((part) => {
    document.querySelector(".detailsList").innerHTML += "<li>" + part.qty + " (" + part.partNbr + ") - " + part.partDescr + "</li>";

    if (part.aisle == "B3") {
        b3Element += "<li> Item: " + part.partNbr + " / qty: " + part.qty
    }
    
    if (part.aisle == "J4") {
        hazard += " <li>Get gloves</li>"
    }

    if (part.aisle != "H1") {
        smallItems = false
    }

    if (part.aisle == "S" || part.aisle == "T" || part.aisle == "U") {
        largeItems = true
    }

    quantity += part.qty
})

if (b3Element != "") {
    document.getElementById("specialPackaging").innerHTML += b3Element
}
else {
    document.querySelector("#specialPackaging").remove()
}
if (hazard != ""){
    document.querySelector("#hazardousMaterials").innerHTML += hazard
}
if (smallItems == true) {
    document.querySelector("#smallItemsOnly").innerHTML += "take a basket and go dirctly to aisle H1"
}
else {
    document.querySelector("#smallItemsOnly").remove()
}
if (largeItems == true) {
    document.querySelector("#forkiftNeeded").innerHTML += "RESERVE FORKLIFT"
}
else {
    document.querySelector("#forkiftNeeded").remove()
}

document.querySelector("#totalItems").innerHTML += " = " + quantity



// list of each part number and qty for check-off in the "detailsList" element......

// if parts requiring special handling exist (in aisle B3), list of items needing
// special packaging in the "specialPackaging" element, else remove element.....

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element....

// if all items in the order are small parts (aisle H1), then let employee know that they should take
// a basket and go dirctly to aisle H1

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

// sum up the total number of parts and append that number to the text already in "totalItems" element
