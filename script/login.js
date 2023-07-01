const signin=document.getElementById("signin");
const login_name=document.getElementById("login_name");
const name1=(localStorage.getItem("name"));
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`
// console.log(name1,login_name)
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

signin.addEventListener("submit",(e)=>{
      e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let obj={
        
        email,
        password
    }

    login(obj);
});

async function login(obj){
    try {
        let res=await fetch(`${BaseUrl}/users/login`,{
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            },
            method:"POST",
        });
        if(res.ok){
            let out=await res.json();
            console.log(out);
            localStorage.setItem("token",(out.token));
            
            localStorage.setItem("name",out.name);
            localStorage.setItem("role",out.role);
            alert("Login Successfull");
            window.location.reload();
           
        }
    } catch (error) {
        console.log(error);
    }
}