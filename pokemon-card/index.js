generateRandom();

async function generateRandom(){

    try{
        const pokemonId = Math.floor(Math.random() * 1025) + 1
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
    
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemon = data.name;

        const imgElement = document.getElementById("pokemonSprite");
        const pokemonNumber = document.getElementById("pokemonNumber");
        const pokemonName = document.getElementById("pokemonName");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        pokemonNumber.textContent = pokemonId;

        pokemonName.textContent = pokemon;
    }

    catch(error){
        console.error(error);
    }

}