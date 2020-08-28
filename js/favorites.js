let favList = document.getElementById("fav-list");

function renderFavList(data, type) {
  favList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let productDiv = document.createElement("div");
    productDiv.classList.add(type);
    productDiv.id = data[i].id;

    let prodImg = document.createElement("img");
    prodImg.setAttribute("src", `${data[i].img[0]}`);

    let nameDiv = document.createElement("div");
    nameDiv.innerText = `${data[i].name}`;

    let descriptionSpan = document.createElement("span");
    descriptionSpan.innerText = `${data[i].description}`;

    let priceDiv = document.createElement("div");
    priceDiv.innerText = `Price: ${data[i].price}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sterge din favorite";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.value = `${data[i].id}`;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Adauga in cos";
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.value = `${data[i].id}`;

    productDiv.appendChild(prodImg);
    productDiv.appendChild(nameDiv);
    productDiv.appendChild(descriptionSpan);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(deleteBtn);
    productDiv.appendChild(addToCartBtn);
    favList.appendChild(productDiv);
  }
}

fetch("http://localhost:3000/api/products/favorites").then(r => r.json()).then(r => renderFavList(r, "list"));

favList.addEventListener("click", function(event) {
  if(event.target.classList.contains("delete-btn")) {
    fetch(`http://localhost:3000/api/products/favorites/${event.target.value}`, {
      method: "DELETE"
    }).then(r => r.json()).then(r => renderFavList(r, "list"));
  }
  
  if(event.target.classList.contains("list")) {
    //sa se mute pe productView
  }

  if(event.target.classList.contains("add-to-cart-btn")) {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "POST"
    })
  }
})