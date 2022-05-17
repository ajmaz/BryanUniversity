axios.get("http://api.bryanuniversity.edu/adammazloum/list/")
    .then(response => {
        console.log(response.data)

        showToDos(response.data)
    }
    )
    .catch(error => console.log(error))


function showToDos(response) {
    response.forEach(element => {
        let newItem = document.createElement("li")
            newItem.innerHTML = element.name + ": " + element.description
            document.getElementById('task-list').append(newItem)

            if(element.isComplete === true){
                newItem.style = " text-decoration: line-through"
            }
    });
}


// const addButton = document.querySelector("#submit").addEventListener("click", function(){
//    let taskName = document.getElementById("name").value
//    let taskDescription = document.getElementById("description").value


//    let newItem = document.createElement("li")
//    newItem += taskName + taskDescription

//    document.appendChild = newItem
// })

