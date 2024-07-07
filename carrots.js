function add50(){

    let grams = parseInt(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = grams + 50 +"g"; 

   let price = parseFloat(document.getElementById("price").innerHTML);
   document.getElementById("price").innerHTML= price + 25.0+ ".00" ;    
}
function add100(){

    let grams = parseInt(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = grams + 100 +"g"; 

    let price = parseFloat(document.getElementById("price").innerHTML);
   document.getElementById("price").innerHTML= price + 50.0 + ".00";    
}

function subs50(){

    let grams = parseInt(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = grams - 50 +"g"; 

    let price = parseFloat(document.getElementById("price").innerHTML);
   document.getElementById("price").innerHTML=  price - 25.0 + ".00";    
}
function addcart(){

    let total = document.getElementById('price').innerHTML;
    localStorage.setItem("carrots",total);

    let grams = document.getElementById('display').innerHTML;
    localStorage.setItem("cqty",grams);

    alert("Item added to cart successfully!");
}

function buymore(){

    window.location.href="buyveg.html";
}
function ret(){

    window.location.href="order.html";
}
let total = localStorage.setItem("carrots");


