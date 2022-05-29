//promise chaining
//url: https://swapi.dev/api/people/1

axios.get("https://swapi.dev/api/people/1")
    .then(res => {
        const luke = res.data.name
        console.log(luke)
        const homeworldUrl = res.data.homeworld
        console.log(homeworldUrl)
        return axios.get(homeworldUrl)
    })
    .then(response => {
        console.log(response.data)
        return axios.get(response.data.films[0])})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))