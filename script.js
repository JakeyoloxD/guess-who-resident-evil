// Wait for DOM to load before trying to find h1
document.addEventListener('DOMContentLoaded', () => {

  // Make <h1> toggle fullscreen
  const heading = document.querySelector('h1');
  heading.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });

  // Make all cards clickable to toggle "fade"
  const cards = document.querySelectorAll('.card');
  const wrongSound = new Audio('WRONG.ogg');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('fade');
      wrongSound.currentTime = 0;
      wrongSound.play();
    });
  });

  // Reset function
  window.resetGrid = function() {
    cards.forEach(card => {
      card.classList.remove('fade');
    });
  };

  // Random character picker
  window.generateCharacter = function() {
    const characterNames = [
    "Jill Valentine",
    "Leon S. Kennedy",
    "Ada Wong",
    "Rebecca Chambers",
    "Nemesis",
    "Wesker",
    "Annette Birkin",
    "Ashley Graham",
    "Barry Burton",
    "Billy Coen",
    "Carlos Oliviera",
    "Chris Redfield",
    "Claire Redfield",
    "Ethan Winters",
    "Heisenberg",
    "Helena Harper",
    "HUNK",
    "Ingrid Hunnigan",
    "Jack Baker",
    "Jack Krauser",
    "Jake Muller",
    "Lady Dimitrescu",
    "Luis Sera",
    "Mia Winters",
    "Mr. X",
    "Piers Nivans",
    "Rosemary Winters",
    "Sherry Birkin",
    "Shiva Alomar",
    "William Birkin"
    ];

    const randomIndex = Math.floor(Math.random() * characterNames.length);
    const randomCharacter = characterNames[randomIndex];
    document.getElementById('random-character').textContent = randomCharacter;
  };

});
