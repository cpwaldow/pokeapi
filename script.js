const inputPokemon = document.getElementById('inputPokemon');
const btnPokemon = document.getElementById('btnPokemon');
const firstTypePokemon = document.querySelector('.first-type');

const pokemonName = document.querySelector('#name');
const pokemonId = document.querySelector('#pokeId');
const pokemonImage = document.querySelector('#pokeImg');

btnPokemon.addEventListener('click', hendleClick);

function hendleClick() {
    const pokeId = inputPokemon.value;
    pokeSearch(pokeId);
}

function forceLower(strInput) {
    strInput.value=strInput.value.toLowerCase();
}

function pokeSearch(pokeName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((r) => {
        if(r.status === 404){
            alert("OPS! Pokemon not found, try again")
        }
        return r.json()
    })
    .then((body) => {
        const pokeImg = body.sprites.other["official-artwork"].front_default;
        const pokeAlt = body.name;
        const pokeTypeFirst = body.types[0].type.name;
        firstTypePokemon.classList.add(`${pokeTypeFirst}`);
        
        pokemonName.innerHTML = body.name;
        pokemonId.innerHTML = body.id;
        pokemonImage.setAttribute('src', pokeImg);
        pokemonImage.setAttribute('alt', pokeAlt);
        firstTypePokemon.innerHTML = body.types[0].type.name;

    })
}