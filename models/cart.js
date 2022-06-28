const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);


module.exports = class Cart {

    static addToCart(id, price) {
        fs.readFile(p, (err, fileContent) => {
            let cartContent = { products: [], totalPrice: 0};
            if(!err) {
                cartContent = JSON.parse(fileContent);
            }

            const existingProductIdx = cartContent.products.findIndex(item => item.id === id);
            const existingProduct = cartContent.products[existingProductIdx];
            let updatedProduct;

            if(existingProduct) {
                console.log(existingProduct);
                updatedProduct = {...existingProduct};
                updatedProduct.quantity = updatedProduct.quantity + 1;
                console.log(updatedProduct);
                cartContent.products[existingProductIdx] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, quantity: 1};
                cartContent.products = [...cartContent.products, updatedProduct];
            }

            cartContent.totalPrice = (parseInt(cartContent.totalPrice) + price).toString();

            fs.writeFile(p, JSON.stringify(cartContent), err => {
                if (err) console.log(err);
            })

        })
    }

}