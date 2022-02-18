/*

3° Atividade 

Dado as seguintes variaveis:

let varA = 'A'; // = varA recebe valor de B
let varB = 'B'; // = varB receba valor de C
let varC = 'C'; // = varC receba valor de A

console.log(varA, varB, varC)]

[A B C]

Faça um programa que mostre o seguinte resultado: 

[B C A] 

*/


let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA, varB, varC)

let auxiliar = varA;
varA = varB;
varB = varC;
varC = Auxiliar;

console.log(varA, varB, varC)
