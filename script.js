const inputPokemon = document.getElementById('inputPokemon');
const btnPokemon = document.getElementById('btnPokemon');

btnPokemon.addEventListener('click', hendleClick);

function hendleClick() {
    event.preventDefault();
    console.log();
    const pokeId = inputPokemon.value;
    buscaCep(pokeId);
}

function buscaCep(cep){
    fetch(`https://pokeapi.co/api/v2/pokemon/${cep}`)
    .then(r => r.json())
    .then(body => {
        console.log(body);

        document.querySelector('#name').innerHTML = body.name;
        document.querySelector('#pokeId').innerHTML = body.id;
        document.querySelector('.type').innerHTML = body.types[0].type.name;

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

    })
}