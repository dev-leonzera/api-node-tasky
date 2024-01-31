const express = require('express');
const { app , port, jsonParser } = require('./imports');
const router = require('../routes');

app.get('/', (req, res) => {
    res.json({"message": "Welcome to the jungle!"});
});
app.use('/api', router);
app.use(express.json());

const run = async () => {
    app.listen(port, () => {
        console.log('listening on port: ' + port)
    })
}

module.exports = run