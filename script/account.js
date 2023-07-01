const token = localStorage.getItem("token");
const name1 = (localStorage.getItem("name"));
let render = document.getElementById("render");
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`
const role=localStorage.getItem("role");
let hide_cart=document.getElementById("hide_cart");
let hide_payment=document.getElementById("hide_payment");
if(role=="Seller"){
    hide_cart.style.display="none";
    hide_payment.style.display="none"
}
if (token == undefined) {
    console.log(token)
    alert("Please Login First");
    window.location.href = "./login.html"

} else {
    if (name1 != undefined) {
        login_name.innerText = name1
    }
}

async function get_data() {
    let out = await fetch(`${BaseUrl}/users/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },

    });
    let res = await out.json();
    console.log(res);

    renderUserData(res);
}
get_data()

function renderUserData(res) {

    // Create elements
    res.forEach((ele) => {
        const div = document.createElement("div");
        div.classList.add('user-data');
        
        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${ele.email}`;

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${ele.name}`;

        const roleElement = document.createElement('p');
        roleElement.textContent = `Role: ${ele.role}`;

        div.append(emailElement, nameElement, roleElement);
        render.append(div);
    })



}




