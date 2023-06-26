
  // Function to fetch data for a specific Pokémon from the API
  async function fetchPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    return data;
  }
  
  // Function to create a card element with Pokémon data
  function createCard(pokemonData) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const name = document.createElement("h3");
    name.textContent = pokemonData.name;
  
    const image = document.createElement("img");
    image.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonData.id.toString().padStart(3, '0')}.png` ;
    image.alt = pokemonData.name;
  
    const baseExperience = document.createElement("p");
    baseExperience.textContent = `Base Experience: ${pokemonData.base_experience}`;
  
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(baseExperience);
  
    return card;
  }
  
  // Function to determine the winner based on base experience
  function determineWinner(playerCard, opponentCard) {
    const playerBaseExp = playerCard.base_experience;
    const opponentBaseExp = opponentCard.base_experience;
  
    if (playerBaseExp > opponentBaseExp) {
      return "Player";
    } else if (playerBaseExp < opponentBaseExp) {
      return "Opponent";
    } else {
      return "Draw";
    }
  }
  
  // Function to simulate a player's turn
  async function playTurn() {
    const playerPokemonId = Math.floor(Math.random() * 151) + 1; // Random Pokémon ID between 1 and 151
    const playerPokemonData = await fetchPokemonData(playerPokemonId);
    const playerCard = createCard(playerPokemonData);
  
    console.log("Player's turn");
    console.log(playerPokemonData); // You can use the data for gameplay or display purposes
  
    // Display the card in the player's hand
    const playerHand = document.getElementById("player-hand");
    playerHand.innerHTML = "";
    playerHand.appendChild(playerCard);
  
    // Simulate opponent's turn after a short delay
    setTimeout(opponentTurn, 2000, playerPokemonData);
  }
  
  // Function to simulate opponent's turn
  async function opponentTurn(playerPokemonData) {
    const opponentPokemonId = Math.floor(Math.random() * 151) + 1; // Random Pokémon ID between 1 and 151
    const opponentPokemonData = await fetchPokemonData(opponentPokemonId);
    const opponentCard = createCard(opponentPokemonData);
  
    console.log("Opponent's turn");
    console.log(opponentPokemonData); // You can use the data for gameplay or display purposes
  
    // Display the card in the opponent's hand
    const opponentHand = document.getElementById("opponent-hand");
    opponentHand.innerHTML = "";
    opponentHand.appendChild(opponentCard);
  
    // Determine the winner
    const winner = determineWinner(playerPokemonData, opponentPokemonData);
    const winnerText = document.getElementById("winner");
    winnerText.textContent = `Winner: ${winner}`;
  }
  
  // Add click event listener to the "Play Turn" button
  const playTurnButton = document.getElementById("play-turn");
  playTurnButton.addEventListener("click", playTurn);
  