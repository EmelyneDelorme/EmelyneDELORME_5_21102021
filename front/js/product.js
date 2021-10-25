function createKanapPage(kanap) {
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

function getProductById(id) {}
let page = window.location.href;
let url = new URL(page);
let id = url.searchParams.get("id");
console.log(id);

fetch("http://localhost:3000/api/products/" + id)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    const kanap = value;
    console.log(kanap);
    createKanapPage(kanap);
  })

  .catch(function (err) {
    console.log("error API response");
  });
