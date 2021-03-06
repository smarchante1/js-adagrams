const Adagrams = {
  drawLetters() {
    const pool = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }

    // don't alter orginal array by creating new array and pushing letters into it
    let letters = [];
    // const randomLetterPool = pool.slice();
    for(let letter in pool) {
      for(let i = 0; i < pool[letter]; i += 1) {
        letters.push(letter);
      }
    }

    let hand = [];
    for(let i = 0; i < 10; i += 1) {
      const randomLetterIndex = Math.floor(Math.random() * (letters.length));
      hand.push(letters[randomLetterIndex]);
      letters.splice(randomLetterIndex, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i += 1) {
      let letter = input.charAt(i);
      if (!lettersInHand.includes(letter)) {
        return false;
      }
      let letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    }
      return true;
  },
  

  scoreWord(word) {
    const scoreKey = {
      "A": 1, "B": 3, "C": 3, "D": 2,
      "E": 1, "F": 4, "G": 2, "H": 4,
      "I": 1, "J": 8, "K": 5, "L": 1,
      "M": 3, "N": 1, "O": 1, "P": 3,
      "Q": 10, "R": 1, "S": 1, "T": 1,
      "U": 1, "V": 4, "W": 4, "X": 8,
      "Y": 4, "Z": 10,
    }

    word = word.toUpperCase();
    let letters = word.split('');
    let score = 0; 
    if (word.length >= 7) {
      score += 8;
    }

    letters.forEach( function(letter) {
      score += scoreKey[letter];
    }
    )
    return score;
  },

  highestScoreFrom(words) {
    const finalWinner = {
      word: '',
      score: 0
    };

    for (let word of words) {
      if (this.scoreWord(word) > finalWinner.score) {
        finalWinner.score = this.scoreWord(word);
        finalWinner.word = word;
      } else if (this.scoreWord(word) === finalWinner.score) {
        if (word.length === 10 && finalWinner.word.length  != 10) {
          finalWinner.word = word;
        } else if (word.length < finalWinner.word.length && (finalWinner.word.length != 10)) {
          finalWinner.word = word;
        }
      }
    }
    return finalWinner
  },

}
  // console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
export default Adagrams;
