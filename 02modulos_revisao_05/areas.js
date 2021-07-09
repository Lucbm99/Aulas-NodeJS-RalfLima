function calculoAreaTriangulo (base, altura) {
    return (base * altura) / 2;
}

function calculoAreaCirculo (raio) {
    return (3.14 * raio * raio);
}

module.exports = {
    calculoAreaTriangulo,   
    calculoAreaCirculo
}