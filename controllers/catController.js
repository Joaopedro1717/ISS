const catService = require("../services/catService");

class CatController {
    getCats(req, res) {
        if (req.query.catName) {
            const cats = catService.findCatByName(req.query.catName);
            return cats.length > 0 
                ? res.json(cats) 
                : res.status(404).json({ message: "Cat not found" });
        }

        res.json(catService.getAllCats());
    }
}

module.exports = new CatController();
