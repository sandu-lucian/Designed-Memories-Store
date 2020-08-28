let cartList = document.getElementById("cart-list");

fetch("http://localhost:3000/api/products/cart")
  .then((r) => r.json())
  .then((r) => {
      renderCartList(r);
      console.log(r)});

function renderCartList(data) {
  cartList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    let photo = document.createElement("img");
    photo.setAttribute("src", `${data[i].img[0]}`);
    photo.classList.add("cart-item-photo");

    let prodTitle = document.createElement("p");
    prodTitle.innerText = data[i].name;

    let prodPrice = document.createElement("p");
    prodPrice.innerText = `${data[i].price} RON`;

    let counter = document.createElement("input");
    counter.type = "number";
    counter.value = 1;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sterge";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.value = `${data[i].id}`;

    cartItem.appendChild(photo);
    cartItem.appendChild(prodTitle);
    cartItem.appendChild(prodPrice);
    cartItem.appendChild(counter);
    cartItem.appendChild(deleteBtn);
    cartList.appendChild(cartItem);
  }
}

cartList.addEventListener("click", function(event) {
  if(event.target.classList.contains("delete-btn")) {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "DELETE"
    }).then(r => r.json()).then(r => renderCartList(r, "list"))
  }
})