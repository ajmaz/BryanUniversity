// const characterListDiv = document.querySelector('.character-container')
// var NameInput = document.querySelector('#searchInput')
// const SearchButton = document.querySelector('.searchButton')


// SearchButton.addEventListener('click', function(e){
//     let GetUrl = `https://rickandmortyapi.com/api/character?name=${NameInput.value}`
//     e.preventDefault()

//     characterListDiv.innerHTML = ""

//     const getChars = () => {
//         axios.get(GetUrl)
//         .then(res => displayChars(res.data.results))
//         .catch(error => console.log(error))
//     }
//     getChars()

//     const displayChars = (characters) => {
//         characters.forEach(character => {
//         let name = character.name 
//         let characterImgURL = character.image  
//         let characterCard = document.createElement('div')
//         let characterImg = document.createElement('img')

//         characterImg.src = characterImgURL
//         characterCard.innerHTML = name

//         characterCard.append(characterImg)
//         characterListDiv.appendChild(characterCard)
//         });
//     }

// })










// const getChars = (url) => {
//     return new Promise((resolve, reject) => {
//         axios.get(url)
//             .then(res => resolve(res.data.results))
//             .catch(error => reject(error))
//     })
// }

// const initApp = () => {
//     let baseUrl = 'https://rickandmortyapi.com/api/character?page='
    
//     let promises = []

//     for (let i = 1; i < 43; i++) {
//         let url = baseUrl + i
//         let promise = getChars(url)
//         promises.push(promise)
//     }

//     Promise.all(promises).then((values) => {
//         values.forEach(value => {
//             value.forEach(val => {
//             let urls = val.image
//             console.log(urls)

//             })
//         })
//     })
// }
// initApp()





