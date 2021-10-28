let tableau = localStorage.getItem("cart");
let selectedKanap = JSON.parse(tableau);
console.log(selectedKanap);
let qte = selectedKanap.qte;
console.log(qte);
CreateCartPage();

function CreateCartPage() {
  // Creer l'article
  const articleItem = document.createElement("article");
  let sectionItem = document.getElementById("cart__items");
  sectionItem.appendChild(articleItem);
  articleItem.className = "cart__item";
  articleItem.setAttribute("data-id", selectedKanap.id);

  // Creer la div contenant l'image
  const divImgItem = document.createElement("div");
  articleItem.appendChild(divImgItem);
  divImgItem.className = "cart__item__img";

  // Creer l'image
  const imageItem = document.createElement("img");
  divImgItem.appendChild(imageItem);
  imageItem.setAttribute("src", selectedKanap.imageUrl);
  imageItem.setAttribute("alt", selectedKanap.altTxt);

  // Creer la div contennt le nom et le prix
  const divContentItem = document.createElement("div");
  articleItem.appendChild(divContentItem);
  divContentItem.className = "cart__item__content";
  const divTitlePriceItem = document.createElement("div");
  divContentItem.appendChild(divTitlePriceItem);
  divTitlePriceItem.className = "cart__item__content__titlePrice";

  // Creer le h2
  const h2Item = document.createElement("h2");
  divTitlePriceItem.appendChild(h2Item);
  h2Item.innerText = selectedKanap.name + " " + selectedKanap.color;

  // Creer le prix
  const priceItem = document.createElement("p");
  divTitlePriceItem.appendChild(priceItem);
  priceItem.innerText = selectedKanap.price + " €";

  // Creer la div contenant le nombre
  const divContentSetItem = document.createElement("div");
  articleItem.appendChild(divContentSetItem);
  divContentSetItem.className = "cart__item__content__settings";
  const divQuantityItem = document.createElement("div");
  divContentSetItem.appendChild(divQuantityItem);
  divQuantityItem.className = "cart__item__content__settings__quantity";

  // Creer le p quantité
  const numberItem = document.createElement("p");
  divQuantityItem.appendChild(numberItem);
  numberItem.innerText = "Qté : ";

  // Creer l'input quantité
  const inputItem = document.createElement("input");
  divQuantityItem.appendChild(inputItem);
  inputItem.setAttribute("type", "number");
  inputItem.setAttribute("name", "itemQuantity");
  inputItem.setAttribute("min", "1");
  inputItem.setAttribute("max", "100");
  inputItem.setAttribute("value", selectedKanap.qte);
  inputItem.className = "itemQuantity";

  // Creer la div delete
  const deleteItem = document.createElement("div");
  divContentSetItem.appendChild(deleteItem);
  deleteItem.className = "cart__item__content__settings__delete";

  // Creer le p delete
  const deletePItem = document.createElement("p");
  deleteItem.appendChild(deletePItem);
  deletePItem.innerText = "Supprimer";
  deletePItem.className = "deleteItem";
  deletePItem.onclick = removeItem;

  function removeItem() {
    let qte = 0;
    inputItem.setAttribute("value", 0);
    console.log(qte);
  }

  // Récupérer la quantité choisie
  const quantity = document.getElementsByClassName("itemQuantity");
  document.addEventListener("change", function (e) {
    let qte = quantity.value;
    console.log("quantité modifiée");
    console.log(qte);
  });
}
