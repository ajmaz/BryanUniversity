let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
var cart= [];

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

function addItem(name, price, qty) {
    const item = { name: name, price: price, qty: qty }
    cart.push(item)
}

function showItems() {
    console.log('You have ${cart.length} items in your cart')
}


function getTotalPrice() {
 
return Number(cart[cart.length-1].price.replace('$', '')) * Number(cart[cart.length-1].qty)
    
}

function getTotalQty() {
 
    return cart[cart.length-1].qty
        
    }
    

function showTotal(item, totalPrice) {

    document.getElementById(item + '-total').value = totalPrice;
}



const buttons = document.getElementsByClassName('btn')
console.log(buttons)


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        addItem(buttons[i].id, document.getElementById(buttons[i].id + '-price').innerHTML, document.getElementById(buttons[i].id + '-qty').value );
       
        var price = getTotalPrice();
        var qty = getTotalQty()
        var s= '';
        if(qty > 1) {
            s='S';
        }
        showTotal( buttons[i].id, qty + ' ' + buttons[i].id.toUpperCase() + s +  ': $' + price )  
    })
}
