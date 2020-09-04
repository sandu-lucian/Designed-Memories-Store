let highlightImg = document.getElementById("highlight-img");
let otherPhotos = document.getElementById("other-photos-container");
let productInfo = document.querySelector(".info-container");

const params = new URLSearchParams(window.location.search);
const prod = params.get("id");

fetch("http://localhost:3000/api/products")
  .then((r) => r.json())
  .then((r) => r.filter((p) => p.id == prod))
  .then((r) => renderProductDetails(r[0]));

function renderProductDetails(data) {
  highlightImg.style.backgroundImage = `url("${data.img[0]}")`;
  for (let i = 0; i < data.img.length; i++) {
    let photo = document.createElement("div");
    photo.style.backgroundImage = `url("${data.img[i]}")`;
    photo.classList.add("general-photo", "other-photo-div");
    photo.value = `${data.img[i]}`;
    otherPhotos.appendChild(photo);
  }

  let prodTitle = document.createElement("h2");
  prodTitle.innerText = data.name;

  let prodPrice = document.createElement("span");
  prodPrice.innerText = `Pret: ${data.price} RON`;

  let prodDescription = document.createElement("p");
  prodDescription.innerText = data.description;

  let addToCartBtn = document.createElement("button");
  addToCartBtn.innerText = "Adauga in cos";
  addToCartBtn.classList.add("general-btn", "btn-anim");
  addToCartBtn.id = "cart-btn";
  addToCartBtn.value = prod;
  addToCartBtn.addEventListener("click", function (event) {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "POST",
    });
  });

  productInfo.appendChild(prodTitle);
  productInfo.appendChild(prodPrice);
  productInfo.appendChild(prodDescription);
  productInfo.appendChild(addToCartBtn);
}

otherPhotos.addEventListener("click", function (event) {
  if (event.target.value) {
    highlightImg.style.backgroundImage = `url("${event.target.value}")`;
  }
});
