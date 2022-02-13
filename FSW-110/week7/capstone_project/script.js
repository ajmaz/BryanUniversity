const taskInput = document.querySelector('#task-input');
const descriptionInput = document.querySelector('#description-input');
const submit = document.querySelector('#submit');


submit.onclick = function () {
    if (taskInput.value.length == 0 && descriptionInput.value.length == 0) {
        alert('please enter task before submit');
    }
    else if (descriptionInput.value.length == 0) {
        alert('please enter task description before submit');
    }
    else if (taskInput.value.length == 0) {
        alert('please enter task before submit');
    }
    else {
        let newDiv = document.createElement('div')
        newDiv.className = 'task'
        newDiv.innerHTML +=  taskInput.value + '<br>' + descriptionInput.value
        let newBtn = document.createElement('button')
        newBtn.className = 'fa fa-times'
        newBtn.className += ' delete'

        newDiv.appendChild(newBtn)
        document.querySelector('.task-container').appendChild(newDiv);

        var remove = document.querySelectorAll('.delete');
        for (let i=0; i< remove.length; i++){
            remove[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    }
}