const typeColors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};






generateRandom();

async function generateRandom(){

    try{
        const pokemonId = Math.floor(Math.random() * 1025) + 1
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

/* Defining constants from the json API file */
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemon = data.name;

        const type1 = data.types[0].type.name;
        
        
        

        const base_experience = data.base_experience;
        const height = Number(data.height)/10;
        const weight = Number(data.weight)/10;

        const ability1 = data.abilities[0].ability.name;




/* Defining constants from the HTML */
        const imgElement = document.getElementById("pokemonSprite");
        const pokemonNumber = document.getElementById("pokemonNumber");
        const pokemonName = document.getElementById("pokemonName");

        const pokemonType1 = document.getElementById("pokemonType1");
        const pokemonType2 = document.getElementById("pokemonType2");

        const pokemonExperience = document.getElementById("pokemonExperience");
        const pokemonHeight = document.getElementById("pokemonHeight");
        const pokemonWeight = document.getElementById("pokemonWeight");

        const pokemonAbility1 = document.getElementById("pokemonAbility1");
        const pokemonAbility2 = document.getElementById("pokemonAbility2");




        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        pokemonNumber.textContent = pokemonId;
        pokemonName.textContent = pokemon;

        pokemonType1.textContent = type1;
        pokemonType1.style.backgroundColor = typeColors[type1]

        if(data.types[1] !== undefined){
            const type2 = data.types[1].type.name;

            pokemonType2.textContent = type2;
            pokemonType2.style.display = "block";
            pokemonType2.style.backgroundColor = typeColors[type2]
        }else {
            pokemonType2.textContent = '';
            pokemonType2.style.display = "none";
        }


        pokemonExperience.textContent = base_experience;
        pokemonHeight.textContent = height;
        pokemonWeight.textContent = weight;

        pokemonAbility1.textContent = ability1;
        if(data.abilities[1] !== undefined){
            const ability2 = data.abilities[1].ability.name;

            pokemonAbility2.textContent = ability2;
            pokemonAbility2.style.display = "block";
        }else {
            pokemonAbility2.textContent = '';
            pokemonAbility2.style.display = "none";
        }

        if(data.abilities[2] !== undefined){
            const ability3 = data.abilities[2].ability.name;

            pokemonAbility3.textContent = ability3;
            pokemonAbility3.style.display = "block";
        }else {
            pokemonAbility3.textContent = '';
            pokemonAbility3.style.display = "none";
        }
    }

    catch(error){
        console.error(error);
    }

}