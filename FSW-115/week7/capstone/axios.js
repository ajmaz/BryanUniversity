









// const getChars = () => {
//     axios.get(GetUrl)
//     .then(res => displayChars(res.data.results))
//     .catch(error => console.log(error))
// }
// getChars()

// const displayChars = (characters) => {
//     characters.forEach(character => {
//     let characterImgURL = character.image
//     console.log(characterImgURL)  
//     let characterImg = document.createElement('img')

//     characterImg.src = characterImgURL

//     });
// }






const getTodo = () => {
    axios.get("http://api.bryanuniversity.edu/adammazloum/list/")
        .then(res => showToDos(res.data))
        .catch(error => console.log(error))
}
getTodo()



const showToDos = (todos) => {


    listContainer = document.querySelector(".list-container")
    listContainer.innerHTML = ""

    todos.forEach(e => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                let characters = res.data.results
                let characterUrl = characters[Math.floor(Math.random() * characters.length)].image
                

                let newtodo = document.createElement("div")
                newtodo.classList.add("todo")


                let newTodoName = document.createElement("h2")
                newTodoName.textContent = e.name
                newtodo.appendChild(newTodoName)

                let newToDoDescription = document.createElement("p")
                newToDoDescription.textContent = e.description
                newtodo.appendChild(newToDoDescription)

     
                if(document.getElementById('addPic').checked == true){
                 let newToDoImage = document.createElement('img')
                newToDoImage.className = "divImage"
                newToDoImage.src = characterUrl
                newtodo.appendChild(newToDoImage)
                
            }
                

                let deleteButton = document.createElement("button")
                deleteButton.textContent = "Delete"
                deleteButton.id = e._id
                deleteButton.addEventListener("click", deleteItem)
                newtodo.appendChild(deleteButton)

                let updatedText = ""


                if (e.isComplete == true) {
                    updatedText = "Mark incomplete"
                }
                else {
                    updatedText = "Mark complete"
                }

                let completeButton = document.createElement("button")
                completeButton.textContent = updatedText
                completeButton.id = e._id
                completeButton.value = e.isComplete
                completeButton.addEventListener("click", updateComplete)
                newtodo.appendChild(completeButton)



                listContainer.append(newtodo)
            })
            .catch(err => console.log(err))

        if (e.isComplete === true) {
            newTodoName.style = " text-decoration: line-through"
        }
        if (e.description == "") {
            e.description = "No description"
        }
    });
}

const postItem = (e) => {
    e.preventDefault()

    let taskNameValue = document.getElementById("name").value
    let descriptionValue = document.getElementById("description").value
    let priceValue = document.getElementById("price").value
    let isCompletedValue = document.getElementById("completed").checked

    let newItem = {
        "name": taskNameValue,
        "description": descriptionValue,
        "price": priceValue,
        "isComplete": isCompletedValue
    }

    axios.post("http://api.bryanuniversity.edu/adammazloum/list/", newItem)
        .then(res => getTodo())
        .catch(error => console.log(error))

}

const form = document.getElementById("todoForm")
form.addEventListener("submit", postItem)


const deleteItem = (e) => {
    let id = e.target.id

    axios.delete("http://api.bryanuniversity.edu/adammazloum/list/" + id)
        .then(res => getTodo())
        .catch(error => console.log(error))

}

updateComplete = (e) => {
    let id = e.target.id
    let value = e.target.value

    let newValue = null

    if (value === "false") {
        newValue = true
    }
    else {
        newValue = false
    }

    let updateItem = {
        isComplete: newValue
    }


    axios.put("http://api.bryanuniversity.edu/adammazloum/list/" + id, updateItem)
        .then(res => getTodo())
        .catch(error => console.log(error))
}