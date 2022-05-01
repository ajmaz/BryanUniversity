// declare any necessary variables
var queryType
var itemID


// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    queryType = document.querySelector("#queryType").value
    itemID = document.querySelector("#itemID").value
    getFromSWAPI()
}


function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)

    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

var updateInfo = function(data){ 
    if (queryType == "people" && itemID > 0 ){
       document.querySelector("#dataLabel1").innerHTML = "Name: "
       document.querySelector("#dataValue1").innerHTML = data.name 
       document.querySelector("#dataLabel2").innerHTML = "Gender: "
       document.querySelector("#dataValue2").innerHTML = data.gender 
       
    }
    if (queryType == "planets" && itemID > 0 ){
    document.querySelector("#dataLabel1").innerHTML = "Planet name: "
    document.querySelector("#dataValue1").innerHTML = data.name 
    document.querySelector("#dataLabel2").innerHTML = "Population: "
    document.querySelector("#dataValue2").innerHTML = data.population 
    }
    if ( queryType === "starships" && itemID > 0 ){
    document.querySelector("#dataLabel1").innerHTML = "Star ship: "
    document.querySelector("#dataValue1").innerHTML = data.name 
    document.querySelector("#dataLabel2").innerHTML = "Crew: "
    document.querySelector("#dataValue2").innerHTML = data.crew 
    }

   if (itemID == "" || itemID == 0){
        document.querySelector("#dataLabel1").innerHTML = "Please make a selection"
        document.querySelector("#dataValue1").innerHTML = ""
        document.querySelector("#dataLabel2").innerHTML = ""
        document.querySelector("#dataValue2").innerHTML = ""
    }
}


// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.