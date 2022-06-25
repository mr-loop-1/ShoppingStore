
const products = [];

module.exports = class {

    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);
    }
    static fetchAll() {
        return products;
    }

}