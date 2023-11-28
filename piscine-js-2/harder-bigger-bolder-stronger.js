export function generateLetters() {
    let thecontainer = document.getElementsByTagName("body")[0]
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    for (let i = 0; i < 120; i++) {
      let lettercontainer = document.createElement('div');
      let letter = letters[Math.floor(Math.random() * letters.length)];
      lettercontainer.textContent = letter;
  
      lettercontainer.style.fontSize = `${11+i}px`;
      if (i < 40) {
        lettercontainer.style.fontWeight = "300";
    } else if (i < 80) {
        lettercontainer.style.fontWeight = "400";
    } else {
        lettercontainer.style.fontWeight = "600";
    }
      thecontainer.appendChild(lettercontainer);
    }
  }  
