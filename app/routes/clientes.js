const { router } = require('../config/imports');
const clientRepository = require('../repositories/clientes');
const ClienteResource = require('../resources/ClienteResource');

const clientes = router;

clientes.get('/', async (req, res) => {
    let dados = await clientRepository.getAllClients();
    let clientes = dados.map(ClienteResource.formatar);
    res.json({clientes: clientes});
});

clientes.get('/:id', async (req, res) => {
    let dados = await clientRepository.getClient(req.params.id);
    let cliente = ClienteResource.formatar(dados[0]);
    res.json({cliente: cliente});
});

// clientes.post('/', async (req, res) => {
//     await clientRepository.insertCliente(req.body);
//     res.sendStatus(201);
// });

module.exports = clientes;