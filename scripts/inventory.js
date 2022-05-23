let productData = JSON.parse(localStorage.getItem("products"));
  console.log(productData);


  display(productData);

  function display(productData){
    document.getElementById("all_products").innerHTML = null;

    productData.map(function(el, i){
    let div = document.createElement("div");

    let type = document.createElement("h3");
    type.innerText = `Product Type:- ${el.type}`;
    let desc = document.createElement("h3");
    desc.innerText = `DESCRIPTION: ${el.desc}`;
    let price = document.createElement("h3");
    price.innerText = `Price: ${el.price}`;
    let img = document.createElement("img");
    img.src = el.image;
    
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove_product")
    btn.addEventListener("click", function(){
      removeFun(el, i);
    })

    div.append(img, type, price, desc, btn);

    document.getElementById("all_products").append(div);
  })

  }
  


  function removeFun(el, i){
    productData.splice(i, 1);

    localStorage.setItem("products", JSON.stringify(productData));

    display(productData);
  }