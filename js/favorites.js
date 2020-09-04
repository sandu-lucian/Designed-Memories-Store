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
    nameDiv.classList.add("title-style");
    nameDiv.innerText = `${data[i].name}`;

    let descriptionSpan = document.createElement("span");
    descriptionSpan.innerText = `${data[i].description}`;

    let priceDiv = document.createElement("div");
    priceDiv.innerText = `Pret:\n${data[i].price} RON`;

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("card-btns");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sterge din favorite";
    deleteBtn.classList.add("btn-anim", "delete-btn", "general-btn-alert", "favorites-btn");
    deleteBtn.value = `${data[i].id}`;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Adauga in cos";
    addToCartBtn.classList.add("btn-anim", "add-to-cart-btn", "general-btn", "favorites-btn");
    addToCartBtn.value = `${data[i].id}`;

    productDiv.appendChild(prodImg);
    productDiv.appendChild(nameDiv);
    productDiv.appendChild(descriptionSpan);
    productDiv.appendChild(priceDiv);
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(addToCartBtn);
    productDiv.appendChild(btnDiv);
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
    window.location = `./productViewer.html?id=${event.target.id}`;
  }

  if(event.target.classList.contains("add-to-cart-btn")) {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "POST"
    })
  }
})