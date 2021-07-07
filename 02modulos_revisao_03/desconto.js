function desconto_dez_por_cento(preco) {
    return preco - (0.1 * preco)
}

function desconto_vinte_por_cento(preco) {
    return preco - (0.2 * preco)
}

function desconto_cinquenta_por_cento(preco) {
    return preco - (0.5 * preco)
}

module.exports = {
    desconto_dez_por_cento,
    desconto_vinte_por_cento,
    desconto_cinquenta_por_cento
}