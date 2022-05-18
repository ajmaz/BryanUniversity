const pokemonData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res => {
            let cleanData = res.data.results
            displayData(cleanData)
        })
        .catch(err => console.log(err))
}

document.querySelector("#firstButton").addEventListener("click", function () {
    pokemonData()
})


const displayData = (cleanData) => {
    cleanData.forEach(e => {
        let newItem = document.createElement("li")
        newItem.textContent = e.name

        document.querySelector(".list").append(newItem)
    });
}



