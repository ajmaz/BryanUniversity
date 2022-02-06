/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */



window.onkeydown = function(e) {
 
    document.getElementById('output').innerHTML = " You've pressed the " + e.code   + "key. It's key code is " + e.which
}
  
