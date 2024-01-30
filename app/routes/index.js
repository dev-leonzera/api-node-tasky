const express = require('express');
const { router } = require('../config');
const clientRepository = require('../repositories/clientes');

router.get('/', (req, res) => {
    res.json({"message": "Welcome to the jungle!"});
});

router.get('/clientes', async (req, res) => {
    let clientes = await clientRepository.getAllClients();
    res.json({clientes: clientes});
});


module.exports = router;