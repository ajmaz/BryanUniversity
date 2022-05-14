const lang = 'JavaScript'
// document.querySelector('#submit').addEventListener('click', function () {
//     const inputList = [
//         document.querySelector('#lang0').value,
//         document.querySelector('#lang1').value,
//         document.querySelector('#lang2').value,
//         document.querySelector('#lang3').value,
//         document.querySelector('#lang4').value,
//         document.querySelector('#lang5').value,
//         document.querySelector('#lang6').value,
//         document.querySelector('#lang7').value
//     ]
//     chkLang(inputList)
// })



function chkLang(lang, ...langs) {
    let result = false
    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    langs.forEach((item) => {
        if (item == lang)
            result = true

    })

    let obj = document.querySelector('#TestResult')
    if (result)
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}