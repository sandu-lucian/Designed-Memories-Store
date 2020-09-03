let cartList = document.getElementById("cart-list");
let items = document.getElementsByClassName("cart-item");
let voucherInput = document.getElementById("voucher-input");
let voucherBtn = document.getElementById("voucher-btn");
let voucherValidation = document.getElementById("voucher-validation-span");
let totalPrice = document.getElementById("total-span");

let pret = 0;

fetch("http://localhost:3000/api/products/cart")
  .then((r) => r.json())
  .then((r) => {
      renderCartList(r);;
      updateTotal();
      console.log(r)
    });

function updateTotal() {
  pret = 0;
  for (let i = 0; i < items.length; i++) {
    pret += items[i].value;
  }
  totalPrice.innerText = pret;
}

function renderCartList(data) {
  cartList.innerHTML = "";

  if(data.length === 0) {
    let warning = document.createElement("h3");
    warning.innerText = "Nu ai niciun produs in cos momentan!";
    totalPrice.innerText = pret;
    cartList.appendChild(warning);

    updateTotal();
  }

  for (let i = 0; i < data.length; i++) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.value = data[i].price;

    let photo = document.createElement("img");
    photo.setAttribute("src", `${data[i].img[0]}`);
    photo.classList.add("cart-item-photo");

    let detailsDiv = document.createElement("div");
    detailsDiv.classList.add("item-details");

    let prodTitle = document.createElement("span");
    prodTitle.innerText = data[i].name;

    let prodPrice = document.createElement("span");
    prodPrice.innerText = `${data[i].price} RON`;

    let counter = document.createElement("input");
    counter.type = "number";
    counter.classList.add("qty-input");
    counter.defaultValue = 1;
    counter.min = 0;

    let itemTotal = document.createElement("span");
    itemTotal.innerText = `Total: ${Math.floor(counter.value) * data[i].price}`;

    counter.addEventListener("keyup", function(e) {
      let total = Math.floor(counter.value) * data[i].price;
      itemTotal.innerText = `Total: ${total}`;
      cartItem.value = total;
      updateTotal();
      console.log(items);
    })

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Sterge";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.value = `${data[i].id}`;

    cartItem.appendChild(photo);
    cartItem.appendChild(detailsDiv);
    detailsDiv.appendChild(prodTitle);
    detailsDiv.appendChild(prodPrice);
    detailsDiv.appendChild(counter);
    cartItem.appendChild(itemTotal)
    cartItem.appendChild(deleteBtn);
    cartList.appendChild(cartItem);
  }
}

cartList.addEventListener("click", function(event) {
  if(event.target.classList.contains("delete-btn")) {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "DELETE"
    }).then(r => r.json()).then(r => {
      renderCartList(r, "list");
      updateTotal();
    })
  }
})

voucherBtn.addEventListener("click", function(event) {
  fetch(`http://localhost:3000/api/products/cart/voucher/${voucherInput.value}`, {
    method: "POST"
  })
  .then(r => r.json()).then(r => {
    if(r) {
      pret *= 0.9;
      voucherValidation.innerText = "Voucherul a fost aplicat!";
      totalPrice.innerText = `${pret.toFixed(2)} RON`;
    } else {
      voucherValidation.innerText = "Voucherul nu este valid!";
    }
  });
})