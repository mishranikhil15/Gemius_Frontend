const main = document.getElementById("main");
const login_name=document.getElementById("login_name");
const name1=(localStorage.getItem("name"));
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`
console.log(name1,login_name)
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

async function get_data() {
    let out = await fetch(`${BaseUrl}/products/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    });
    let res = await out.json();
    console.log(res.msg);
    display(res.msg)
}
get_data()

function display(res) {
    main.innerHTML=""
    res.forEach((ele) => {
      let div = document.createElement("div");
      div.className = "product";
  
      let img = document.createElement("img");
      img.className = "product-image";
      img.setAttribute("src", ele.image);
  
      let name = document.createElement("h3");
      name.className = "product-name";
      let nameSpan = document.createElement("span");
      nameSpan.innerText = "Name: ";
      name.appendChild(nameSpan);
      name.appendChild(document.createTextNode(ele.name));
  
      let rating = document.createElement("h3");
      rating.className = "product-rating";
      let ratingSpan = document.createElement("span");
      ratingSpan.innerText = "Rating: ";
      rating.appendChild(ratingSpan);
      rating.appendChild(document.createTextNode(ele.rating));
  
      let price = document.createElement("h3");
      price.className = "product-price";
      let priceSpan = document.createElement("span");
      priceSpan.innerText = "Price: ";
      price.appendChild(priceSpan);
      price.appendChild(document.createTextNode(ele.price));
  
      let type = document.createElement("h3");
      type.className = "product-type";
      let typeSpan = document.createElement("span");
      typeSpan.innerText = "Type: ";
      type.appendChild(typeSpan);
      type.appendChild(document.createTextNode(ele.type));
  
      let brand = document.createElement("h3");
      brand.className = "product-brand";
      let brandSpan = document.createElement("span");
      brandSpan.innerText = "Brand: ";
      brand.appendChild(brandSpan);
      brand.appendChild(document.createTextNode(ele.brand));
  
      let flavors = document.createElement("h3");
      flavors.className = "product-flavors";
      let flavorsSpan = document.createElement("span");
      flavorsSpan.innerText = "Flavors: ";
      flavors.appendChild(flavorsSpan);
      flavors.appendChild(document.createTextNode(ele.flavors));
  
      let sizes = document.createElement("h3");
      sizes.className = "product-sizes";
      let sizesSpan = document.createElement("span");
      sizesSpan.innerText = "Sizes: ";
      sizes.appendChild(sizesSpan);
      sizes.appendChild(document.createTextNode(ele.sizes));

    //   let quantity = document.createElement("h3");
    //   quantity.className = "product-quantity";
    //   let quantitySpan = document.createElement("span");
    //   quantitySpan.innerText = "quantity: ";
    //   quantity.appendChild(quantitySpan);
    //   quantity.appendChild(document.createTextNode(ele.quantity));
  
      div.append(img, name, rating, price, type, brand, flavors, sizes);
      main.append(div);
    });
  }
  
  //// filter
  let sizes=document.getElementById("size");
  sizes.addEventListener("change",()=>{
    let value=sizes.value;
    if(value==""){
        // console.log(value);
        get_data()
        return;
    }
    async function get_filt_data1(value) {
        let out = await fetch(`${BaseUrl}/category/filter?value=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
    
        });
        let res = await out.json();
        console.log(res.msg);
        display(res.msg)
    }
    get_filt_data1(value)
  })

  //// sort

  let sort=document.getElementById("sort");
  sort.addEventListener("change",()=>{
    let value=sort.value;
    if(value==""){
        // console.log(value);
        get_data()
        return;
    }
    async function get_sort_data(value) {
        let out = await fetch(`${BaseUrl}/category/sort?value=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
    
        });
        let res = await out.json();
        console.log(res.msg);
        display(res.msg)
    }
    get_sort_data(value)
  })
  
  /// search

  async function search_data(search) {
    let out = await fetch(`${BaseUrl}/category/search?value=${search}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    });
    let res = await out.json();
    console.log(res.msg);
    display(res.msg)
}
let search_btn=document.getElementById("search_btn");
search_btn.addEventListener("click",()=>{
    let search=document.getElementById("search").value;
    console.log(search)
    search_data(search)
})
