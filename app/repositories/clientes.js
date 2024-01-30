const { client } = require('../config/database');

async function getAllClients() {
    const res = await client.query('SELECT * FROM clientes');
    return res[0];
}

module.exports = {getAllClients}
