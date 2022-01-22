const resultReturn = async () => {
  const { results } = await fetchApiList();
  results.forEach(async (element) => {
    const { name, sprites, types } = await fetchApiCard(element.name);

    const obj = {
      nome: name,
      image: sprites.front_default,
    };
    createComponent(obj);
  });
};

const createComponent = ({ nome, image }) => {
  const listagem = document.querySelector('#listagem');
  const section = document.createElement('section');
  const link = document.createElement('a');
  const img = document.createElement('img');

  section.classList.add('pokecard');

  img.setAttribute('src', image);
  link.innerText = nome;
  link.setAttribute('href', 'teste');

  section.appendChild(link);
  section.appendChild(img);
  return listagem.appendChild(section);
};

resultReturn();
