//store the products array in localstorage as "products"
let productData = JSON.parse(localStorage.getItem("products")) || [];
  function productArr(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
  }

  function addFun(e) {
    event.preventDefault();
    let form = document.getElementById("products");

    let ptype = form.type.value;
    let pdesc = form.desc.value;
    let pprice = form.price.value;
    let pimg = form.image.value;

    let arr = new productArr(ptype, pdesc, pprice, pimg);

    productData.push(arr);

    localStorage.setItem("products", JSON.stringify(productData))

    document.getElementById("type").value = null;
    document.getElementById("desc").value = null;
    document.getElementById("price").value = null;
    document.getElementById("image").value = null;
  }