const express = require("express");
const app = express();
const catRoutes = require("./routes/catRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

// Definindo as rotas
app.use("/cat", catRoutes);

// Middleware de erro
app.use(errorHandler);

module.exports = app;



/*
const express = require("express")
const app = express()
const port = 3000

app.listen(port, () => console.log("api is up"))

// Rota /get simples
app.get("/", (req, res) => {
    const message = "This route is used only to show some data"

    res.send(message)
})

// Rota /get query string 
app.get("/plus_two_values", (req, res) => {
    let valueOne = parseFloat(req.query.valueOne ? req.query.valueOne : '5')
    let valueTwo = parseFloat(req.query.valueTwo ? req.query.valueTwo : '5')
    
    const message = `The result: ${valueOne + valueTwo}`

    res.send(message)
})

app.get("/find_age_by_list_name", (req, res) => {
    
    const nameToFind = req.query.name
    
    const list = [
        {name: 'Jorge', age:20},
        {name: 'Armando', age:10},
        {name:'Fabio', age:24},
        {name:'Alexandre', age:35},
    ]
    
    const response = {
      result:list.find(e => e.name === nameToFind) 
    }
        
    res.json(response)
})

class CatDTO {
    constructor(
        listOfCats
    ) {
        this.listOfCats = listOfCats
    }

    getListOfCats() {
        return this.listOfCats
    }
}

class CatController {
    constructor(CatDTO) {
        this.CatDTO = CatDTO
    }

    findAllCats(req, res) {
        const cats = this.CatDTO.getListOfCats()

        if (req.query.catName) {
            const filteredCats = cats.filter(e => e.catName === req.query.catName)
            return filteredCats.length > 0 
                ? res.json(filteredCats) 
                : res.status(404).json({ message: "cat not found" })
        }

        res.json(cats) // Retorna todos os gatos se `catName` não for informado
    }
}

const cat = new CatController(
    new CatDTO(
        [
            {catName: 'Miau', tutor: "Jorge"},
            {catName: 'Tom', tutor: "Alexandre"},
            {catName: 'Frajola', tutor: "Wilton"},
            {catName: 'Bola de Neve', tutor: "Orlando"}
        ]
    )
)

app.get("/cat", (req, res) => {
    cat.findAllCats(req, res)
})
*/