const login_name=document.getElementById("login_name");
const name1=(localStorage.getItem("name"));
console.log(name1,login_name);

let token=localStorage.getItem("token");



if(name1!=undefined){
    login_name.innerText=name1
}