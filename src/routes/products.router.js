const { Router } = require('express')
const ProductManager = require('../ClasesProduct/productmanager')

const ProductRouter = Router();

const productos = new ProductManager()

const leerProductos = productos.getProduct()

ProductRouter.get('/', async (req, res) => {
    let limit = parseInt(req.query.limit)

    if (!limit) return res.send(await leerProductos)

    let allProduct = await leerProductos

    let productLimit = allProduct.slice(0, limit)

    res.json(productLimit)
})
ProductRouter.get('/:id', async (req, res) => {

    let id = +req.params.id

    let allProduct = await leerProductos

    let productById = allProduct.find(product => product.id === id)

    if (productById) {
        console.log(productById)
    } else {
        console.log("Not found")
    }

    res.json(productById)
})
ProductRouter.post("/", async (req, res) => {
    let newProduct = req.body
    res.send(await productos.addProducts(newProduct))
})
ProductRouter.put("/:id", async (req, res) => {
    let id = req.params.id
    let updateProducts = req.body
    res.send(await productos.updateProducts(id, updateProducts))
})

ProductRouter.delete("/:id", async (req, res) => {
    let id = req.params.id
    res.send(await productos.deleteProduct(id))
})


module.exports = ProductRouter;