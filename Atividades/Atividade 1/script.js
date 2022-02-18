/*

1° Atividade

Exercício de fixação, para aplicar os conhecimentos aprendiso sobre Const e Let.

Imprima o seguinte texto:

[ "Seu nome" tem "idade" anos, pesa "peso" kg tem "altura" de altura e o seu IMC é de "IMC" ]

*/


const nomeCompleto = "Roan Bittencourt de Carvalho";
const idade = 20;
const peso = 100;
const altura = 1.80;
const imc = peso / (altura * 2);
const msg = ` ${nomeCompleto} tem ${idade} anos de idade, pesa ${peso} kg tem ${altura} de altura e o seu IMC é de ${imc.toFixed(2)}`;

console.log(msg);