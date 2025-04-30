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
      "Dwight Fairfield", "Meg Thomas", "Claudette Morel", "Jake Park", "Nea Karlsson", "David King", "Feng Min", "Kate Denson",
      "Quentin Smith", "Laurie Strode", "Ace Visconti", "Bill Overbeck", "Ashley J. Williams", "Jane Romero", "Jeff Johansen", "Yui Kimura",
      "Zarina Kassir", "Steve Harrington", "Nancy Wheeler", "Felix Richter", "Elodie Rakoto", "Yun-Jin Lee", "Jill Valentine", "David Tapp",
      "Leon S. Kennedy", "Mikaela Reid", "Sable Ward", "Aestri", "Lara Croft", "Trevor Belmont", "Taurie Cain", "Cheryl Mason", "Jonah Vasquez",
      "Haddie Kaur", "Vittorio Toscano", "Ada Wong", "Adam Francis", "Rebecca Chambers", "Thalita Lyra", "Renato Lyra", "Gabriel Soma",
      "Nicolas Cage", "Ellen Ripley", "Alan Wake", "Yoichi Asakawa",
      "Trapper", "Wraith", "Hillbilly", "Nurse", "Huntress", "Myers", "Hag", "Doctor", "Cannibal", "Nightmare", "Pig",
      "Clown", "Spirit", "Legion", "Plague", "Ghost Face", "Demogorgon", "Oni", "Deathslinger", "Pyramid Head", "Blight",
      "Twins", "Trickster", "Nemesis", "Pinhead", "Artist", "Onryō", "Dredge", "Wesker", "Knight", "Skull Merchant",
      "Singularity", "Xenomorph", "Chucky", "Unknown", "Hound Master", "Dark Lord", "Ghoul", "Lich"
    ];

    const randomIndex = Math.floor(Math.random() * characterNames.length);
    const randomCharacter = characterNames[randomIndex];
    document.getElementById('random-character').textContent = randomCharacter;
  };

});
