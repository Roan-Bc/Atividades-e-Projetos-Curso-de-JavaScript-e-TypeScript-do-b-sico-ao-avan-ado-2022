/*

Atividade 10 

Desenvolva um script que selecione os 4 paragrafos da pagina do index.html,
e mude o background desses parágrafos para a cor do body e colocar a cor
do texto dos parágrafos em branco.

*/

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}
