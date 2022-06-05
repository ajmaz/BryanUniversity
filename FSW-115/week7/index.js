const getChars = () => {
    axios.get('https://rickandmortyapi.com/api/character?page=1')
    .then(res => displayChars(res.data))
    .catch(error => console.log(error))
}

getChars()

const displayChars = (characters) => {
    console.log(characters.results)
    characters.results.forEach(character => {
        console.log(character.name)
    });
}








// const getCharacters = () => {
//     axios.get('https://rickandmortyapi.com/api/character?page=1')
//     .then(res => {
//         let results = res.data.results
//         results.forEach(result => {
//             console.log(result)
//         });
//     })
//     .catch(error => console.log(error))
    
// }
// getCharacters()