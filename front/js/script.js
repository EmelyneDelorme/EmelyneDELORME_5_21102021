fetch("http://localhost:3000/api/products/")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    const listKanap = value;

    // boucle qui affiche le nom de chaque canapé
    for (let i = 0; i < listKanap.length; i++) {
      createKanapCard(listKanap[i]);
    }
  })

  .catch(function (err) {
    console.log("error API response");
  });

function createKanapCard(kanap) {
  console.log(kanap.name);
  // Creer le lien associée au produit
  const anchorItem = document.createElement("a");
  let sectionItem = document.getElementById("items");
  sectionItem.appendChild(anchorItem);
  anchorItem.setAttribute("href", "./product.html?id=" + kanap._id);

  // Creer l'article associée au lien produit
  const articleItem = document.createElement("article");
  anchorItem.appendChild(articleItem);

  // Creer l'image associée à l'article
  const imgItem = document.createElement("img");
  articleItem.appendChild(imgItem);
  imgItem.setAttribute("src", kanap.imageUrl);
  imgItem.setAttribute("alt", kanap.altTxt);

  // Creer le titre associé à l'article
  const h3Item = document.createElement("h3");
  articleItem.appendChild(h3Item);
  h3Item.className = "productName";
  h3Item.innerText = kanap.name;

  // Creer le paragraphe associé à l'article
  const pItem = document.createElement("p");
  articleItem.appendChild(pItem);
  pItem.className = "productDescription";
  pItem.innerText = kanap.description;
}
