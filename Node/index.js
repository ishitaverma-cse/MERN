const express = require('express')
const app = express()
const port = 3000

const products = [
    {id: 1, name: "Mobile", category: "Electronics", price: 50000},
    {id: 2, name: "Laptop", category: "Electronics", price: 70000},
    {id: 3, name: "T-Shirt", category: "Fashion", price: 500},
    {id: 4, name: "Jean", category: "Fashion", price: 1500},
    {id: 5, name: "Tablet", category: "Electronics", price: 30000},
]

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id

    const product = products.find(
        p => p.id == productId
    )
    res.json(product)
})

app.get('/filter-products', (req, res) => {
    const category = req.query.category

    const filteredProducts = products.filter(
        p => p.category == category
    )
    res.json(filteredProducts)
})

app.get('/', (req, res) => {
  res.send('Hello Backend!!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// const express = require('express');
// const app = express();
// const port = 3000

// const products = [
//     { id: 1, name: "Mobile", category: "Electronics", price: 50000 },
//     { id: 2, name: "Laptop", category: "Electronics", price: 70000 },
//     { id: 3, name: "T-Shirt", category: "Fashion", price: 500 },
//     { id: 4, name: "Jean", category: "Fashion", price: 1500 },
//     { id: 5, name: "Tablet", category: "Electronics", price: 30000 },
// ]

// app.get('/products', (req, res) => {
//     res.json(products)
// })

// app.get('/products/:id', (req, res) => {
//     // Route param
//     const id = req.params.id;

//     const product = products.find(
//         p => p.id == id
//     )
//     res.json(product);
// })

// app.get('/filter-products', (req, res) => {
//     //Query param
//     const category = req.query.category;

//     const filteredProducts = products.filter(
//         p => p.category == category
//     )
//     res.json(filteredProducts)
// })


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })