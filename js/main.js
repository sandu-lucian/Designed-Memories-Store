let productsList = document.getElementById("products-list");
let searchbar = document.getElementById("searchbar");
let searchBtn = document.getElementById("mag-glass");

let selectedFilter = [];
let prodsList;
let filteredList;
let favoritesList;
let searchList = [];

let displayStyle = "card";

(function fetchList() {
  fetch("http://localhost:3000/api/products")
    .then((r) => r.json())
    .then((r) => {
      renderProductsList(r, displayStyle);
      prodsList = r;
    }).then(() => {
      fetch("http://localhost:3000/api/products/favorites")
    .then((r) => r.json())
    .then((r) => {
      favoritesList = r;
      tagFavorites(favoritesList)
    });
    });
})();

function tagFavorites(data) {
  data.forEach((el) => {
    let heart = document.getElementById(`${el.id}`);
    heart.getElementsByClassName('fa')[0].classList.add('fa-heart');
    heart.getElementsByClassName('fa')[0].classList.remove('fa-heart-o');
  });
}

function renderProductsList(data, type) {
  for (let i = 0; i < data.length; i++) {
    let productDiv = document.createElement("div");
    productDiv.classList.add(type);
    productDiv.id = data[i].id;

    let prodImg = document.createElement("img");
    prodImg.setAttribute("src", `${data[i].img[0]}`);

    let nameDiv = document.createElement("div");
    nameDiv.innerText = `${data[i].name}`;
    nameDiv.classList.add("title-style");

    let descriptionSpan = document.createElement("span");
    descriptionSpan.innerText = `${data[i].description}`;

    let priceDiv = document.createElement("div");
    priceDiv.innerText = `Pret:\n${data[i].price} RON`;

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("card-btns");

    let favBtn = document.createElement("i");
    favBtn.classList.add("fa", "fa-heart-o", "fa-2x", "heart-style");
    favBtn.value = `${data[i].id}`;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Adauga in cos";
    addToCartBtn.classList.add("btn-anim", "general-btn");
    addToCartBtn.name = "cartBtn";
    addToCartBtn.value = `${data[i].id}`;

    productDiv.appendChild(prodImg);
    productDiv.appendChild(nameDiv);
    productDiv.appendChild(descriptionSpan);
    productDiv.appendChild(priceDiv);
    btnDiv.appendChild(favBtn);
    btnDiv.appendChild(addToCartBtn);
    productDiv.appendChild(btnDiv);
    productsList.appendChild(productDiv);
  }
}

function filterProductType(string) {
  if (selectedFilter.includes(string)) {
    selectedFilter = selectedFilter.filter((f) => f !== string);
  } else {
    selectedFilter.push(string);
  }

  if (selectedFilter.length === 0) {
    productsList.innerHTML = "";
    renderProductsList(prodsList, displayStyle);
  } else {
    filteredList = prodsList.filter((p) =>
      selectedFilter.includes(p.filters.productType)
    );
    productsList.innerHTML = "";
    renderProductsList(filteredList, displayStyle);
  }
}

function compareProducts(key, order = "asc") {
  return function sort(a, b) {
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

document.querySelector("#type").addEventListener("click", function (event) {
  if (event.target.value) {
    filterProductType(event.target.value);
  }
});

document.querySelector("#sort").addEventListener("click", function (event) {
  switch (event.target.value) {
    case "asc-price":
      filteredList =
        selectedFilter.length === 0
          ? prodsList.sort(compareProducts("price"))
          : filteredList.sort(compareProducts("price"));
      productsList.innerHTML = "";
      renderProductsList(filteredList, displayStyle);
      break;
    case "desc-price":
      filteredList =
        selectedFilter.length === 0
          ? prodsList.sort(compareProducts("price", "desc"))
          : filteredList.sort(compareProducts("price", "desc"));
      productsList.innerHTML = "";
      renderProductsList(filteredList, displayStyle);
      break;
    case "a-z":
      filteredList =
        selectedFilter.length === 0
          ? prodsList.sort(compareProducts("name"))
          : filteredList.sort(compareProducts("name"));
      productsList.innerHTML = "";
      renderProductsList(filteredList, displayStyle);
      break;
    case "z-a":
      filteredList =
        selectedFilter.length === 0
          ? prodsList.sort(compareProducts("name", "desc"))
          : filteredList.sort(compareProducts("name", "desc"));
      productsList.innerHTML = "";
      renderProductsList(filteredList, displayStyle);
      break;
    case "":
      if (selectedFilter.length > 0) {
        productsList.innerHTML = "";
        renderProductsList(filteredList, displayStyle);
      } else {
        productsList.innerHTML = "";
        renderProductsList(prodsList, displayStyle);
      }
      break;
    default:
      break;
  }
});

productsList.addEventListener("click", function (event) {
  let selectedObj = prodsList.filter(p => p.id === event.target.value);
  
  if(event.target.classList.contains("fa-heart-o")) {
    event.target.classList.remove("fa-heart-o");
    event.target.classList.add("fa-heart");
    fetch(`http://localhost:3000/api/products/favorites/${selectedObj[0].id}`, {
      method: "POST"
    })
  } else if (event.target.classList.contains("fa-heart")) {
    event.target.classList.remove("fa-heart");
    event.target.classList.add("fa-heart-o");
    fetch(`http://localhost:3000/api/products/favorites/${selectedObj[0].id}`, {
      method: "DELETE"
    })
  }

  if(event.target.classList.contains("card") || event.target.classList.contains("list")) {
    window.location = `./productViewer.html?id=${event.target.id}`;
}

  if(event.target.name === "cartBtn") {
    fetch(`http://localhost:3000/api/products/cart/${event.target.value}`, {
      method: "POST"
    })
  }
});

document.getElementById("list-btn").addEventListener("click", function(e) {
  productsList.innerHTML = "";
  displayStyle = "list";
  if(selectedFilter.length === 0) {
    renderProductsList(prodsList, displayStyle);
  } else {
    renderProductsList(filteredList, displayStyle);
  }
  fetch("http://localhost:3000/api/products/favorites")
    .then((r) => r.json())
    .then((r) => {
      favoritesList = r;
      tagFavorites(favoritesList)
})
});

document.getElementById("card-btn").addEventListener("click", function(e) {
  productsList.innerHTML = "";
  displayStyle = "card";
  if(selectedFilter.length === 0) {
    renderProductsList(prodsList, displayStyle);
  } else {
    renderProductsList(filteredList, displayStyle);
  }
  fetch("http://localhost:3000/api/products/favorites")
    .then((r) => r.json())
    .then((r) => {
      favoritesList = r;
      tagFavorites(favoritesList)
})
});

searchbar.addEventListener("keyup", function (e) {
  searchList = [];

  for (let i = 0; i < prodsList.length; i++) {
    let lowercaseName = prodsList[i].name.toLowerCase();
    if (lowercaseName.match(`${searchbar.value}`)) {
      searchList.push(prodsList[i]);
    }
  }

  console.log(searchList);
  productsList.innerHTML = "";
  renderProductsList(searchList, displayStyle);
});

document.getElementById("logout-btn").addEventListener("click", function(event) {
  handleLogout();
})