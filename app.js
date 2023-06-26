function imgSlider(anything){
  document.querySelector('.pepsi').src = anything ;
}
function changeBgColor(color){
  const sec = document.querySelector('body') ;
  sec.style.background = color
}


const slider = document.querySelector('.slider');
const pokemonImages = [
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png',
];

let currentIndex = 0;

// Function to display Pokémon image in the slider
function showPokemonImage(index) {
const imageUrl = pokemonImages[index];
const img = document.createElement('img');
img.src = imageUrl;
img.alt = `Pokémon ${index + 1}`;
slider.innerHTML = '';
slider.appendChild(img);
}

// Initial display
showPokemonImage(currentIndex);

// Function to handle next button click
function nextPokemon() {
currentIndex++;
if (currentIndex >= pokemonImages.length) {
currentIndex = 0;
}
showPokemonImage(currentIndex);
}

// Function to handle previous button click
function previousPokemon() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = pokemonImages.length - 1;
}
showPokemonImage(currentIndex);
}


// Add buttons to the slider
slider.appendChild(prevBtn);
slider.appendChild(nextBtn);


