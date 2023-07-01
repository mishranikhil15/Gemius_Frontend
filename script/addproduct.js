let form=document.querySelector("#add");


let token=localStorage.getItem("token");
let edit_id=localStorage.getItem("edit_data")
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const image = document.getElementById("image").value;
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const price = document.getElementById("price").value;
    const type = document.getElementById("type").value;
    const brand = document.getElementById("brand").value;
    const flavors = document.getElementById("flavors").value;
    const sizes = document.getElementById("sizes").value;
   
  
      

    let obj={
        image,
        name,
        rating,
        price,
        type,
        brand,
        flavors,
        sizes,
        
    }
    // console.log(obj);
    if(edit_id){
        for(let key in obj){
            if(obj[key]==""){
                delete obj[key];
            }
        }
        edit_seller_data(obj,edit_id)
    }else{

        add_seller_data(obj);
    }
    
});
/// add data
async function add_seller_data(obj){
    try {
        let res=await fetch(`${BaseUrl}/products/addProducts`,{
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json",
                "Authorization": localStorage.getItem("token")
            },
            method:"POST",
        });
        if(res.ok){
            let out=await res.json();
            console.log(out);
            alert("Data Added");
            window.location.href="./product.html"
        }
    } catch (error) {
        console.log(error);
    }
}

////edit data

async function edit_seller_data(obj,edit_id){
    try {
        let res=await fetch(`${BaseUrl}/products/EditProducts/${edit_id}`,{
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json",
                "Authorization": localStorage.getItem("token")
            },
            method:"PATCH",
        });
        if(res.ok){
            let out=await res.json();
            console.log(out);
            alert("Edited Data Successfully");
            localStorage.removeItem("edit_data");

            window.location.href="./product.html"
        }
    } catch (error) {
        console.log(error);
    }
}