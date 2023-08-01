const newProduct = (name, imageUrl, price, id) => {
    const card = document.createElement("div");
    const content = `<div class="products-item">
    <img class="item-img" src="${imageUrl}">
    <h1 class="item-name">${name}</h1>
    <p class="item-price">${price}</p>
    <button class="item-btn">See product</button>
</div><br>`

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};