const fetchApiList = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0',
  );
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchApiList,
  };
}
