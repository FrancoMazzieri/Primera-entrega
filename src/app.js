const express = require('express')
const productRouter = require('./routes/products.router')
const cartsRouter = require('./routes/carts.router')



const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/carts', cartsRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Expres por local host ${server.address().port}`)
})
server.on("Error", (error) => {
    console.log(`Error del servidor ${error}`)
})
