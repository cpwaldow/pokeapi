const inputPokemon = document.getElementById('inputPokemon');
const btnPokemon = document.getElementById('btnPokemon');

btnPokemon.addEventListener('click', hendleClick);

function hendleClick() {
    event.preventDefault();
    const pokeId = inputPokemon.value;
    buscaCep(pokeId);
}

function forceLower(strInput) {
    strInput.value=strInput.value.toLowerCase();
}

function buscaCep(pokeName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(r => {
        if(r.status === 404){
            alert("Pokemon Not Found, try again")
        }
        return r.json()
    })
    .then(body => {
        const pokeImg = body.sprites.other["official-artwork"].front_default;
        const pokeAlt = body.name;
        
        document.querySelector('#name').innerHTML = body.name;
        document.querySelector('#pokeId').innerHTML = body.id;
        document.querySelector('#pokeImg').setAttribute('src', pokeImg);
        document.querySelector('#pokeImg').setAttribute('alt', pokeAlt);
        document.querySelector('.ability').innerHTML = body.abilities[0].ability.name;
        document.querySelector('.ability1').innerHTML = body.abilities[1].ability.name;

        if(body.types.length === 1) {
            document.querySelector('.type').innerHTML = body.types[0].type.name;
            document.querySelector('.type1').style.display = "none";
        }

        if(body.types.length === 2) {
            document.querySelector('.type').innerHTML = body.types[0].type.name;
            document.querySelector('.type1').innerHTML = body.types[1].type.name;
            document.querySelector('.type1').style.display = "unset";
        }

        if(body.types[0].type.name === "grass"){
            document.querySelector('.type').style.background = '#64FE2E'
        }

        if(body.types[0].type.name === "poison"){
            document.querySelector('.type').style.background = '#BE81F7'
        }

        if(body.types[0].type.name === "normal"){
            document.querySelector('.type').style.background = '#FBFAFA'
        }

        if(body.types[0].type.name === "flying"){
            document.querySelector('.type').style.background = '#99F3FD'
        }

        if(body.types[0].type.name === "fire"){
            document.querySelector('.type').style.background = '#F16F6F'
        }

        if(body.types[0].type.name === "water"){
            document.querySelector('.type').style.background = '#4498F3'
        }

        if(body.types[0].type.name === "bug"){
            document.querySelector('.type').style.background = '#64FE2E'
        }

        if(body.types[0].type.name === "electric"){
            document.querySelector('.type').style.background = '#FAE449'
        }

        if(body.types[0].type.name === "ground"){
            document.querySelector('.type').style.background = '#AB4904'
        }

        if(body.types[0].type.name === "fairy"){
            document.querySelector('.type').style.background = '#FA79C2'
        }

        if(body.types[0].type.name === "fighting"){
            document.querySelector('.type').style.background = '#BDBDBD'
        }

        if(body.types[1].type.name === "grass"){
            document.querySelector('.type1').style.background = '#64FE2E'
        }

        if(body.types[1].type.name === "poison"){
            document.querySelector('.type1').style.background = '#BE81F7'
        }

        if(body.types[1].type.name === "normal"){
            document.querySelector('.type1').style.background = '#FBFAFA'
        }

        if(body.types[1].type.name === "flying"){
            document.querySelector('.type1').style.background = '#99F3FD'
        }

        if(body.types[1].type.name === "fire"){
            document.querySelector('.type1').style.background = '#F16F6F'
        }

        if(body.types[1].type.name === "water"){
            document.querySelector('.type1').style.background = '#4498F3'
        }

        if(body.types[1].type.name === "bug"){
            document.querySelector('.type1').style.background = '#64FE2E'
        }

        if(body.types[1].type.name === "electric"){
            document.querySelector('.type1').style.background = '#FAE449'
        }

        if(body.types[1].type.name === "ground"){
            document.querySelector('.type1').style.background = '#AB4904'
        }

        if(body.types[1].type.name === "fairy"){
            document.querySelector('.type1').style.background = '#FA79C2'
        }

        if(body.types[1].type.name === "fighting"){
            document.querySelector('.type1').style.background = '#BDBDBD'
        }
    })
}