function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: "Programador",
        status: 1,
        codigo: "6544645213"
    };
    return novosDados
}

console.log(cadastroPessoa({nome: "Matheus", sobrenome: "Fraga", anoInicio: 2045}))