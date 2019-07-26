const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) //pega a resposta e transforma em um JSON legivel

app.post('/users', (req, resp, next) => {
    console.log(req.body)
    resp.send('<h1>Congratulations</h1>')
})

app.post('/users/:id', (req, resp, next) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Congratulations. To the user</h1>')
})

app.listen(3003)