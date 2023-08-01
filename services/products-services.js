const productsList = () => {
    fetch("http://localhost:3000/product")
    .then(response => response.json())
    .catch(error => console.log(error))
};

export const productsServices = {
    productsList,
    createProducts
};

const createProducts = (imageUrl, name, price) => {
    fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageUrl,
            price,
            name
        })
        }).then(response => {
            if(response.ok) {
                return response.body;
            };
    })
    throw new Error("We couldn't create your product.");
};