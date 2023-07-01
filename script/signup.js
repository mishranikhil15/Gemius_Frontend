let form=document.querySelector("#form");
const login_name=document.getElementById("login_name");
const name1=(localStorage.getItem("name"));
// console.log(name1,login_name)
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`
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

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let role=document.getElementById("role").value;
      

    let obj={
        name,
        email,
        password,
        role
    }
    console.log(obj);
    register(obj);
});

async function register(obj){
    try {
        let res=await fetch(`${BaseUrl}/users/register`,{
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
        });
        if(res.ok){
            let out=await res.json();
            console.log(out);
            alert("user created");
            window.location.href="./login.html"
        }
    } catch (error) {
        console.log(error);
    }
}