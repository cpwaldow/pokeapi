const resultReturn = async () => {
  const { results } = await fetchApiList();
  results.forEach((element) => {
    createComponent(element.name);
    fetchApiCard(element.name);
  });
};

const createComponent = (nome) => {
  const listagem = document.querySelector('#listagem');
  const section = document.createElement('section');
  const link = document.createElement('a');
  //const image = document.createElement('img');

  section.classList.add('pokecard');

  link.innerText = nome;
  link.setAttribute('href', 'teste');

  section.appendChild(link);
  return listagem.appendChild(section);
};

resultReturn();
