function confirm(){

     let name = document.getElementById("name").value;
     localStorage.setItem("name",name);

     let address = document.getElementById("address").value;
     localStorage.setItem("address",address);

     let number = document.getElementById("number").value;
     localStorage.setItem("num",number);

     alert("Saved Details Successfully!");

    window.location.href="index.html";

    

}