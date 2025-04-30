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
    "Chris Redfield",
    "Claire Redfield",
    "Barry Burton",
    "Carlos Oliveira",
    "Sheva Alomar",
    "Ethan Winters",
    "Mia Winters",
    "Rosemary Winters",
    "Lady Dimitrescu",
    "Karl Heisenberg",
    "Salvatore Moreau",
    "Donna Beneviento",
    "HUNK",
    "Sherry Birkin",
    "William Birkin",
    "Piers Nivans",
    "Helena Harper",
    "Jack Baker"
    ];

    const randomIndex = Math.floor(Math.random() * characterNames.length);
    const randomCharacter = characterNames[randomIndex];
    document.getElementById('random-character').textContent = randomCharacter;
  };

});
