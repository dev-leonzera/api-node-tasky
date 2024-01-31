const { client } = require('../config/database');

async function getAllClients() {
    const res = await client.query('SELECT * FROM clientes');
    return res[0];
}

async function getClient(id){
    const res = await client.query('SELECT * FROM clientes WHERE ID=?', [id]);
    return res[0];
}

// async function insertCliente(cliente) {
//     const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
//     const values = [
//         customer.nome, 
//         customer.idade, 
//         customer.uf
//     ];
//     await client.query(sql, values);
// }

// async function updateClient(id, customer) {
//     const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
//     const values = [customer.nome, customer.idade, customer.uf, id];
//     await client.query(sql, values);
// }

// async function deleteClient(id) {
//     return await client.query('DELETE FROM clientes where id=?;', [id]);
// }

module.exports = {    
    getAllClients,
    getClient
}
