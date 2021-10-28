function createKanapPage(kanap) {
  console.log("createKanapPage");
  // Creer l'image
  const imgItem = document.createElement("img");
  let imgClassItem = document.getElementsByClassName("item__img");
  imgClassItem[0].appendChild(imgItem);

  imgItem.setAttribute("src", kanap.imageUrl);
  imgItem.setAttribute("alt", kanap.altTxt);

  // Creer le h1
  let h1Item = document.getElementById("title");
  h1Item.innerText = kanap.name;

  // Creer la description
  let descriptionItem = document.getElementById("description");
  descriptionItem.innerText = kanap.description;

  // Creer le prix
  let priceItem = document.getElementById("price");
  priceItem.innerText = kanap.price;

  // Creer le choix couleur
  let select = document.getElementById("colors");
  let options = kanap.colors;

  for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

function getColorQuantity() {
  // Récupérer la couleur choisie
  const select = document.getElementById("colors");
  document.addEventListener("change", function (e) {
    let color = select.value;
    console.log("couleur choisie");
    console.log(color);
    selectedKanap.color = color;
  });

  // Récupérer la quantité choisie
  const quantity = document.getElementById("quantity");
  document.addEventListener("change", function (e) {
    let qte = quantity.value;
    console.log("quantité choisie");
    console.log(qte);
    selectedKanap.qte = qte;
  });
}

let page = window.location.href;
let url = new URL(page);
let id = url.searchParams.get("id");
let selectedKanap = {
  imageUrl: "",
  altTxt: "",
  name: "",
  price: "",
  id: "",
  qte: "",
  color: "",
};
console.log(id);

fetch("http://localhost:3000/api/products/" + id)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    const kanap = value;
    createKanapPage(kanap);
    getColorQuantity();
    console.log(kanap);
    selectedKanap.imageUrl = kanap.imageUrl;
    selectedKanap.altTxt = kanap.altTxt;
    selectedKanap.name = kanap.name;
    selectedKanap.price = kanap.price;
    selectedKanap.id = kanap._id;
    // Changer le nom de l'onglet
    let titleItem = document.getElementsByTagName("title");
    titleItem[0].innerText = kanap.name;
  })
  .catch(function (err) {
    console.log("error API response");
  });

// // Récupérer le click du bouton v1
// const elt = document.getElementById("addToCart");
// elt.addEventListener("click", function () {
//   console.log("cliqué!");
//   console.log(selectedKanap);
//   let kanapToCart = JSON.stringify(selectedKanap);
//   localStorage.setItem("Cart", kanapToCart);
// });

// Récupérer le click du bouton
const elt = document.getElementById("addToCart");
elt.addEventListener("click", function () {
  console.log("addEventListener", selectedKanap);

  if (selectedKanap.qte == 0) {
    alert("Renseignez la quantité");
  } else if (selectedKanap.color.length == 0) {
    alert("Renseignez la couleur");
  } else {
    let tableau = JSON.parse(localStorage.getItem("cart"));
    if (tableau === null) {
      localStorage.setItem("cart", JSON.stringify([]));
      tableau = JSON.parse(localStorage.getItem("cart"));
    }
    tableau.push(selectedKanap);

    let kanapToCart = JSON.stringify(tableau);
    localStorage.setItem("cart", kanapToCart);
    console.log("cliqué!");
  }
});
