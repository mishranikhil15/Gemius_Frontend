const main = document.getElementById("main");
const login_name = document.getElementById("login_name");
const name1 = (localStorage.getItem("name"));
// console.log(name1,login_name)
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
let BaseUrl=`https://giant-pink-dirndl.cyclic.app`

if(role=="Seller"){
    hide_cart.style.display="none";
    hide_payment.style.display="none"
}

if(token==undefined){
    alert("Please Login First");
    window.location.href="./login.html"
}

if (name1 != undefined) {
    login_name.innerText = name1
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


async function get_seller_data() {
    let out = await fetch(`${BaseUrl}/products/seller`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },

    });
    let res = await out.json();
    console.log(res.msg);
    seller_display(res.msg);
}

if (role == "Customer") {
    get_data()
} else if (role == "Seller") {
    get_seller_data();
    let seller_add = document.getElementById("seller_add");
    seller_add.style.display = "inline";
    seller_add.addEventListener("click",()=>{
        window.location.href="./addproduct.html"
    })
}

function display(res) {
    main.innerHTML = ""
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

        // let quantity = document.createElement("h3");
        // quantity.className = "product-quantity";
        // let quantitySpan = document.createElement("span");
        // quantitySpan.innerText = "quantity: ";
        // quantity.appendChild(quantitySpan);
        // quantity.appendChild(document.createTextNode(ele.quantity));

        let btn = document.createElement("button");
        btn.innerText = "Add To Cart"
        btn.addEventListener("click", () => {
            // let arr=JSON.parse(localStorage.getItem("cart"))||[];
            // console.log(ele);
            // arr=[...arr,ele._id]
            // localStorage.setItem("cart",JSON.stringify(arr));


            add_to_cart(ele._id)
        })

        div.append(img, name, rating, price, type, brand, flavors, sizes, btn);
        main.append(div);
    });
}



//// seller Render Function

function seller_display(res) {
    main.innerHTML = ""
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

        let quantity = document.createElement("h3");
        quantity.className = "product-quantity";
        let quantitySpan = document.createElement("span");
        quantitySpan.innerText = "quantity: ";
        quantity.appendChild(quantitySpan);
        quantity.appendChild(document.createTextNode(ele.quantity));


        let btn2 = document.createElement("button");
        btn2.innerText = "Edit"
        btn2.addEventListener("click", () => {
            localStorage.setItem("edit_data",ele._id)
           window.location.href="./addproduct.html"
        })

        let btn3 = document.createElement("button");
        btn3.innerText = "Delete"
        btn3.addEventListener("click", () => {
            seller_delete_data(ele._id)
        })

        div.append(img, name, rating, price, type, brand, flavors, sizes, quantity, btn2, btn3);
        main.append(div);
    });
}

/// seller delete
async function seller_delete_data(id) {
    let out = await fetch(`${BaseUrl}/products/DeleteProducts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({ id })
    });
    let res = await out.json();
    console.log(res.msg);
    get_seller_data();
}



//// filter
let sizes = document.getElementById("size");
sizes.addEventListener("change", () => {
    let value = sizes.value;
    if (value == "") {
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

let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
    let value = sort.value;
    if (value == "") {
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
let search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", () => {
    let search = document.getElementById("search").value;
    console.log(search)
    search_data(search)
})


async function add_to_cart(id) {
    

    let out = await fetch(`${BaseUrl}/cart/postcart`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({ id })
    });

    let res = await out.json();
    console.log(res.msg);
    alert(res.msg);
}