/*

2° Atividade

Crie um arquivo.js e nele crie duas variaveis, num1 e num2, e peça para o usuário digitar 
o número 1 e o número 2, após o usuário digitar ambos os números
deve ser devolvido o resultado da soma desses números com um alert().


*/


const num1 = Number(prompt('Digite o primeiro número'));
const num2 = Number(prompt('Digite o segundo número'));
const resultado = num1 + num2;

alert(`A soma do número ${num1} e o número ${num2} deu o total de: ${resultado}`);