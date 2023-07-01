const login_name=document.getElementById("login_name");
const name1=(localStorage.getItem("name"));
console.log(name1,login_name);

let token=localStorage.getItem("token");
const role=localStorage.getItem("role");
let hide_cart=document.getElementById("hide_cart");
let hide_payment=document.getElementById("hide_payment");
if(role=="Seller"){
    hide_cart.style.display="none";
    hide_payment.style.display="none"
}

if(name1!=undefined){
    login_name.innerText=name1
}