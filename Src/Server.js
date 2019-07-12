const gate = 3003

const express = require('express')
const data_base = require('./DataBase')
const app = express()
const body_parser = require('body-parser')

app.use(body_parser.urlencoded({extended: true}))
//*************************GETS******************************************* */
app.get('/products', (request,response,next)=>{
    response.send(data_base.get_products_list())
})

app.get('/products/:ID', (request,response,next)=>{
    response.send(data_base.get_product(request.params.ID))
})
//*************************GETS******************************************* */

//*************************SETS******************************************* */
app.post('/products',(request, response, next)=>{
    const product = data_base.set_product({
        name: request.body.name, 
        price: request.body.price
    })
    response.send(product)
})

app.put('/products/:ID',(request, response, next)=>{
    const product = data_base.set_product({
        ID: request.params.ID,
        name: request.body.name, 
        price: request.body.price
    })
    response.send(product)
})

app.delete('/products/:ID',(request, response, next)=>{
    const product = data_base.delete_product(request.params.ID)
    response.send(product)
})
//*************************SETS******************************************* */

app.listen(gate, ()=>{ 
    console.log(`Server is executing in gate ${gate}`)
})