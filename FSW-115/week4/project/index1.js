console.log(axios)

function starWarsData(){
axios.get("https://swapi.dev/api/people/")
    .then(res => {
        let cleanData = res.data.results
        displayData(cleanData)
        })
        .catch(err => console.log(err))
}

document.querySelector("#secondButton").addEventListener("click", function () {
    starWarsData()
})

const displayData = (cleanData) => {
    cleanData.forEach(e => {
        let newItem = document.createElement("li")
        newItem.innerHTML = e.name

        document.querySelector(".list").append(newItem)
    });
}
 