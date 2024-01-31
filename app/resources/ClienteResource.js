class ClienteResource {
    static formatar(cliente) {
        return {
            nome: cliente.nome,
            email: cliente.email,
            data_contrato: cliente.data_contrato,
            tipo: cliente.tipo === 'pf' ? 'Pessoa Física' : 'Pessoa Jurídica',
            ativo: cliente.ativo === 1 ? 'Ativo' : 'Inativo',
            dia_vencimento: cliente.dia_vencimento,
            mensalista: cliente.mensalista === 1 ? 'Sim' : 'Não'
        };
    }
}

module.exports = ClienteResource;