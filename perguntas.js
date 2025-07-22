function criaCartao(categoria, pergunta, resposta) {
  const cartao = document.createElement('div');
  cartao.className = 'cartao';

  const catElem = document.createElement('div');
  catElem.className = 'categoria';
  catElem.textContent = categoria;

  const perguntaElem = document.createElement('div');
  perguntaElem.className = 'pergunta';
  perguntaElem.textContent = pergunta;

  const respostaElem = document.createElement('div');
  respostaElem.className = 'resposta';
  respostaElem.textContent = resposta;

  cartao.append(catElem, perguntaElem, respostaElem);

  cartao.addEventListener('click', () => {
    respostaElem.style.display =
      respostaElem.style.display === 'none' ? 'block' : 'none';
  });

  document.body.appendChild(cartao);
}

criaCartao(
  'Conhecimentos Gerais',
  'Qual é o maior planeta do sistema solar?',
  'O maior planeta do sistema solar é Júpiter'
);

criaCartao(
  'Língua Alemã',
  'Como se diz "Quente" em alemão?',
  'Quente em alemão é "heiß"'
);

criaCartao(
  'Conhecimentos Gerais',
  'Quantos ossos temos em nosso corpo?',
  'Temos 206 ossos'
);

criaCartao(
  'Conhecimentos Gerais',
  'Qual a montanha mais alta do mundo?',
  'A maior montanha do mundo é o Monte Everest'
);
