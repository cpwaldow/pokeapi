const inputPokemon = document.getElementById('inputPokemon');
const btnPokemon = document.getElementById('btnPokemon');
const firstTypePokemon = document.querySelector('.first-type');
const secoundTypePokemon = document.querySelector('.secound-type');

btnPokemon.addEventListener('click', hendleClick);

function hendleClick(event) {
    event.preventDefault();
    const pokeId = inputPokemon.value;
    pokeSearch(pokeId);
}

function forceLower(strInput) {
    strInput.value=strInput.value.toLowerCase();
}

function pokeSearch(pokeName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(r => {
        if(r.status === 404){
            alert("OPS! Pokemon not found, try again")
        }
        return r.json()
    })
    .then(body => {
        const pokeImg = body.sprites.other["official-artwork"].front_default;
        const pokeAlt = body.name;
        const pokeTypeFirst = body.types[0].type.name;
        firstTypePokemon.classList.add(`${pokeTypeFirst}`);
        
        
        document.querySelector('#name').innerHTML = body.name;
        document.querySelector('#pokeId').innerHTML = body.id;
        document.querySelector('#pokeImg').setAttribute('src', pokeImg);
        document.querySelector('#pokeImg').setAttribute('alt', pokeAlt);
        document.querySelector('.ability').innerHTML = body.abilities[0].ability.name;
        document.querySelector('.ability1').innerHTML = body.abilities[1].ability.name;

        if(body.types.length === 1) {
            firstTypePokemon.innerHTML = body.types[0].type.name;
            secoundTypePokemon.style.display = "none";
        }

        if(body.types.length === 2) {
            firstTypePokemon.innerHTML = body.types[0].type.name;
            secoundTypePokemon.innerHTML = body.types[1].type.name;
            secoundTypePokemon.style.display = "unset";
            const pokeTypeSecound = body.types[1].type.name;
            secoundTypePokemon.classList.add(`${pokeTypeSecound}`);
        }
    })
}