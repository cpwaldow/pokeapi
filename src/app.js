const fetchApi = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
  );
  const data = await response.json();
  return data;
};

const resultReturn = async () => {
  const { results } = await fetchApi();
  results.forEach((element) => {
    createComponent(element.name);
    console.log(element);
  });
};

const createComponent = (nome) => {
  const listagem = document.querySelector('#listagem');

  const section = document.createElement('section');

  section.classList.add('pokecard');

  const link = document.createElement('a');

  link.innerText = nome;

  section.appendChild(link);
  return listagem.appendChild(section);
};

createComponent();
resultReturn();
