const express = require("express");
const router = express.Router();

const Vendas = require('../controllers/vendas.controllers');

router.get('/', Vendas.teste);
router.post('/criar', Vendas.criar);
router.get('/listar', Vendas.listar);
router.get('/listar/:id', Vendas.listar);
router.put('/alterar', Vendas.alterar);
router.delete('/excluir/:id', Vendas.excluir);

module.exports = router