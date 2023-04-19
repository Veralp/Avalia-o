const con = require('../dao/connect')
const Vendas = require('../models/vendas.model')

//Método que recebe uma lista e aplica o modelo em todos os elementos
const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Vendas(lista[i])
    return lista
}

//Métodos CRUD
const criar = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = async (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let vendas = new Vendas(req.body)
    con.query(vendas.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let vendas = new Vendas(req.params)
    con.query(vendas.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const teste = (req, res) => {
    res.json("Vendas Respondendo").end()
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
} 