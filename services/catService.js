const Cat = require("../models/cat");

class CatService {
    constructor() {
        this.cats = [
            new Cat('Miau', 'Jorge'),
            new Cat('Tom', 'Alexandre'),
            new Cat('Frajola', 'Wilton'),
            new Cat('Bola de Neve', 'Orlando')
        ];
    }

    getAllCats() {
        return this.cats;
    }

    findCatByName(catName) {
        return this.cats.filter(cat => cat.catName === catName);
    }
}

module.exports = new CatService();
