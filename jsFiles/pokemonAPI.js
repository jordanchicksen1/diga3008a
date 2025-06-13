let currentPokemon = null;

function loadPokemon() {
  const id = Math.floor(Math.random() * 151) + 1; // the first 151 pokemon
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // getting the list from the api
    .then(res => res.json())
    .then(data => {
      currentPokemon = data.name.toLowerCase();
      document.getElementById('pokemonImg').src = data.sprites.front_default;
      document.getElementById('pokemonImg').alt = "Who's that Pokémon?";
      document.getElementById('pokemonContainer').classList.remove('revealed');
      document.getElementById('resultMessage').textContent = '';
      document.getElementById('guessInput').value = '';
    });
}

function checkGuess() {
  const guess = document.getElementById('guessInput').value.trim().toLowerCase();
  const result = document.getElementById('resultMessage');
  const container = document.getElementById('pokemonContainer');

  if (guess === currentPokemon) {
    result.textContent = `Correct! It's ${currentPokemon.charAt(0).toUpperCase() + currentPokemon.slice(1)}!`;
    result.className = 'correct';
    container.classList.add('revealed');
  } else {
    result.textContent = `Nope! Try again.`;
    result.className = 'wrong';
  }
}


window.onload = loadPokemon;
