/*

Atividade 9

Desenvolva um script que adicione dentro da section com a class="container" no index.html,
um paragrafo com Qualquer texto que você quiser, uma div com outra frase,
uma section com outra frase e um footer com uma frase.

Para resolução desse exercicio é recomendavel o uso do For.

*/

const elementos = [
  {tag: 'p', texto: 'Qualquer texto que você quiser.'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  //tagCriada.innerText = texto;
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada);
}

container.appendChild(div);





