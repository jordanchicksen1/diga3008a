let currentPokemon = null; //pokemon being displayed
let score = 0; //how many pokemon they get right

function updateScore() {
  document.getElementById('score').textContent = `Score: ${score}`; //runs when they get an answer right
}

function loadPokemon() { //used to display the pokemon
  const id = Math.floor(Math.random() * 151) + 1; //only first gen (151)
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //the api i'm using
    .then(res => res.json())
    .then(data => {
      currentPokemon = data.name.toLowerCase();
      const img = document.getElementById('pokemonImg');//display pokemon image
      img.src = data.sprites.front_default;
      img.alt = `A silhouette of ${data.name}`;
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
    result.textContent = `Correct! It's ${capitalize(currentPokemon)}!`;
    result.className = 'correct';
    container.classList.add('revealed');
    score++; //adds one to player score
    updateScore();
  } else {
    result.textContent = `Nope! Try again.`;
    result.className = 'wrong';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


window.onload = () => {
  loadPokemon();
  updateScore(); 
};
