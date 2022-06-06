// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
var sysNameInput = document.getElementById('system')
var subSystem = document.getElementById('subSystem')



getSystems(0, sysNameInput)

function getSystems(parentID, dl) {
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 
    fetch('data.json')
        .then(response => {
            return response.json();
        }).then(data => {
            const finalID = data.systems.filter(parent => parent.parentID == parentID)
            populateDD(finalID, dl)

        }).catch(err => {
            console.log(err)
        });
}

function populateDD(arr, dl) {
    let option1 = document.createElement('option');
    option1.innerHTML = 'Select an Item';
    dl.appendChild(option1);

    arr.forEach((item) => {
        let option = document.createElement('option');
        option.value = item.sysID;
        option.innerHTML = item.sysName;
        dl.appendChild(option)
    });
    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).
}

document.querySelector('#system').addEventListener('change', function () {
    removeOptions(subSystem)

    getSystems(this.value, subSystem)

}
    // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.


)
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}
