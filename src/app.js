const resultReturn = async () => {
  const { results } = await fetchApiList();
  results.forEach(async (element) => {
    const { name, sprites, types } = await fetchApiCard(element.name);

    const obj = {
      nome: name,
      image: sprites.front_default,
      type: types,
    };
    //Object.assign(obj, { type: 'value3' });
    createComponent(obj);
  });
};

const createComponent = ({ nome, image, type }) => {
  console.log(type);

  const mockType = type[0].type.name;
  //const mockType2 = type.forEach((item) => );
  const listagem = document.querySelector('#listagem');
  const section = document.createElement('section');
  const link = document.createElement('a');
  const img = document.createElement('img');
  const tipo = document.createElement('p');

  section.classList.add('pokecard');

  img.setAttribute('src', image);
  link.innerText = nome;
  link.setAttribute('href', 'teste');
  tipo.innerText = mockType;

  section.appendChild(link);
  section.appendChild(img);
  section.appendChild(tipo);
  return listagem.appendChild(section);
};

resultReturn();
