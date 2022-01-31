const resultReturn = async () => {
  const { results } = await fetchApiList();
  results.forEach(async (element) => {
    const { name, sprites, types, id } = await fetchApiCard(element.name);

    const obj = {
      nome: name,
      image: sprites.front_default,
      type: types,
      id,
    };
    createComponent(obj);
  });
};

const createComponent = ({ nome, image, type, id }) => {
  const listagem = document.querySelector('#listagem');
  const section = document.createElement('section');
  const pokeName = document.createElement('p');
  const img = document.createElement('img');
  const tipo = document.createElement('p');

  let arr = [];

  type.forEach((item) => {
    arr.push(item.type.name);
  });

  section.classList.add('pokecard');

  img.setAttribute('src', image);
  pokeName.innerText = `${nome}, ${id}`;

  arr.length === 1
    ? (tipo.innerText = arr[0])
    : (tipo.innerText = `${arr[0]} | ${arr[1]}`);
  section.appendChild(pokeName);
  section.appendChild(img);
  section.appendChild(tipo);
  return listagem.appendChild(section);
};

resultReturn();
