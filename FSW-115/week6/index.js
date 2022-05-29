const lukeContainer = document.querySelector(".lukeContainer")
const movielist = document.querySelector("#movielist")
const planetContainer = document.querySelector(".planetContainer")

axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        const lukeInfo = res.data
        console.log(lukeInfo)
        let newHeading = document.createElement('h2')
        newHeading.innerHTML = lukeInfo.name
        lukeContainer.appendChild(newHeading)
        const homeworldUrl = res.data.homeworld
        return axios.get(homeworldUrl)
    })
    .then(response => {
        const planet = response.data.name
        planetContainer.innerHTML = planet
        console.log(planet)

        return axios.get(response.data.films[1])
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))





async function getAllLukeMovies() {
    const lukeData = await axios.get('https://swapi.dev/api/people/1')
    const lukeFilms = lukeData.data.films
    console.log(lukeData.data)
    const pendingFilmsPromises = []
    lukeFilms.forEach(film => {
        pendingFilmsPromises.push(axios.get(film))
    });


    Promise.all(pendingFilmsPromises)
        .then(res => {
            res.forEach(film => {
                let newFilm = document.createElement('li')
                newFilm.innerHTML = film.data.title

                movielist.appendChild(newFilm)
            });
        })
        .catch(err => console.log(err))
}

getAllLukeMovies()