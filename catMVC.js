/*const app = express()

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
        if(!req.query.catName) {
            res
                .status(400)
                .json(
                    {
                        message:"define the name of cat in queryString catName, please"
                    }
                )

            return
        }

        const cats = this.CatDTO.getListOfCats()
            .filter(
                e => e.catName === req.query.catName
            )        
        
        cats.lenght > 0 ? res.json(cats) : res.status(404).json({message:"cat not found"})
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