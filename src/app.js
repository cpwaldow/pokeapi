const fetchApiList = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
  );
  const data = await response.json();
  return data;
};

const resultReturn = async () => {
  const { results } = await fetchApiList();
  results.forEach((element) => {
    createComponent(element.name);
  });
};

const createComponent = (nome) => {
  const listagem = document.querySelector('#listagem');
  const section = document.createElement('section');
  const link = document.createElement('a');

  section.classList.add('pokecard');

  link.innerText = nome;
  link.setAttribute('href', 'teste');

  section.appendChild(link);
  return listagem.appendChild(section);
};

resultReturn();
