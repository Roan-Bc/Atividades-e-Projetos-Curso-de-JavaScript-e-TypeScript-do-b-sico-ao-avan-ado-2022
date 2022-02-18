/*

5° Atividade 

Faça um programa que retorne : 

O seu número.
A raiz quadrada do número digitado.
se é um número do tipo inteiro.
se o número digitado é do tipo NaN.
O arredondamento para baixo desse número.
O arredondamento para cima desse número.
E delimite duas casas decimais para esse número.

*/

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;

const msg = `<p>A raiz quadrada do número digitado é ${Math.sqrt(numero)} .</p>` + 
            `<p>${numero} é um número do tipo inteiro ? ${Number.isInteger(numero)} .</p>` + 
            `<p>O número digitado é do tipo NaN ? ${Number.isNaN(numero)}.</p>` + 
            `<p>O arredondamento para baixo do número digitado é de: ${Math.floor(numero)}.</p>` + 
            `<p>O arredondamento para cima do número digitado é de: ${Math.ceil(numero)}.</p>` + 
            `<p>O número digitado com duas casas decimais: ${numero.toFixed(2)}.</p>`;

texto.innerHTML = msg; 


