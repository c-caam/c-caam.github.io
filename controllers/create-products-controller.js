import { productsServices } from "../services/products-services";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-product-price]').value;
    const description = document.querySelector('[data-product-description]').value;

    productsServices.createProducts(url, category, name, price, description)
    .then(response => {
        window.location.href = "../screens/index.html";
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
});