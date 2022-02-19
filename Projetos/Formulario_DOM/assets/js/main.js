const container = document.querySelector('.form-container');
const resultado = document.querySelector('.resultado');


// Cria e envia H1 // 

function criaH1() {
    const h1 = document.createElement('h1')
    return h1;
}

function enviaTexto() {
    const h1 = criaH1();
    const msg = `Calculadora utilizando DOM`

    h1.innerHTML = msg;
    container.appendChild(h1);
}

// Fim //  

const formulario = [
    {tag: 'label', name: 'first-label-form', type: "null", value: "null", texto: 'Primeiro número:'},
    {tag: 'input', name: 'first-input-form', type: "text", value: "text", texto: ''},
    {tag: 'label', name: 'second-label-form', type: "null", value: "null", texto: 'Segundo número:'},
    {tag: 'input', name: 'second-input-form', type: "text", value: "text", texto: ''},
    {tag: 'button', name: 'first-button-form', type: "submit", value: "submit", texto: 'Enviar'}
];


function criaForm() {
    form = document.createElement('form')
    form.classList.add("form-resultado-container");
    return form;
}


function adicionaFormulario(){
    const form = criaForm();
    for (let i = 0; i < formulario.length; i++){
        let {tag,name,type,value,texto} = formulario[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        tagCriada.classList.add(name);
        tagCriada.setAttribute(type, value);
        tagCriada.appendChild(textoCriado);
        form.appendChild(tagCriada);
    }
    
    container.appendChild(form);
    document.getElementsByClassName('form-resultado-container')[0].addEventListener('submit', function (evento) {
        evento.preventDefault();
        const inputNum1 = evento.target.querySelector('.first-input-form');
        const inputNum2 = evento.target.querySelector('.second-input-form');
      
        const num1 = Number(inputNum1.value);
        const num2 = Number(inputNum2.value);

        if (!num1) {
            enviaResultado('Primeiro número digitado inválido!', false);
            return;
          }
        
          if (!num2) {
            enviaResultado('Segundo número digitado inválida!', false);
            return;
          }
      
        const resultado = somaNumeros(num1, num2);
        
        const msg = `O resultado de ${num1} + ${num2} é de: ${resultado}.` 
        enviaResultado(msg, true);
      });
}

function criaP() {
    const p = document.createElement('p')
    return p;
}

function somaNumeros(num1, num2){
    const resultado = num1 + num2;
    return resultado.toFixed(0);
}

function enviaResultado(msg, isValid) {
    const p = criaP();
    resultado.innerHTML = '';
    if (isValid) {
        p.classList.add('paragrafo-resultado');
      } else {
        p.classList.add('bad');
      }

    p.innerHTML = msg;
    resultado.appendChild(p);
}




enviaTexto(criaH1);
adicionaFormulario(criaForm);



