let username = localStorage.getItem("name");
let userAddress = localStorage.getItem("address");
let number = localStorage.getItem("num");
console.log(userAddress);

document.getElementById("namee").value = username;
document.getElementById("add").value = userAddress;
document.getElementById("no").value = number;

document.getElementById("cqty").innerHTML= localStorage.getItem("cqty");
document.getElementById("cprice").innerHTML= localStorage.getItem("carrots");
document.getElementById("oqty").innerHTML= localStorage.getItem("oqty");
document.getElementById("oprice").innerHTML= localStorage.getItem("onions");
document.getElementById("cqty").innerHTML= localStorage.getItem("cqty");
 
let c = parseFloat(localStorage.getItem("carrots"));
let o = parseFloat(localStorage.getItem("onions"));

let total = c + o ;

document.getElementById("tot").innerHTML = total + ".00" ;

function final() {

alert("Thankyou ! Visit us again !");

 localStorage.setItem("cqty","0") ;
 localStorage.setItem("carrots", "0.00");
 localStorage.setItem("oqty","0");
 localStorage.setItem("onions","0.00");


 

}