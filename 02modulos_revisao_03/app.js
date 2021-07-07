var descontos = require('./desconto');

var calculo_dez_por_cento = descontos.desconto_dez_por_cento;
var calculo_vinte_por_cento = descontos.desconto_vinte_por_cento;
var calculo_cinquenta_por_cento = descontos.desconto_cinquenta_por_cento;


console.log(calculo_dez_por_cento(50));
console.log(calculo_vinte_por_cento(50));
console.log(calculo_cinquenta_por_cento(50));

