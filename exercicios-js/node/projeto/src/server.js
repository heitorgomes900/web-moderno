const porta = 3003

const express = require('express')
const app = express()
const db = require('./database')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) // converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = db.delProduto(req.params.id)
    res.send(produto)
})


app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
