module.exports = {
    async getAllClients(){
        const res = await client.query('SELECT * FROM clientes');
        return res[0];
    }
}