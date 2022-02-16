const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    let arr = [];
    for (let i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }
    let withoutNull = arr.map((item) => {
      let letter = item.replace(/00/g, '');
      letter = letter.replace(/10/g, '.');
      letter = letter.replace(/11/g, '-');
      letter = letter.replace('**********', ' ')
      if (MORSE_TABLE.hasOwnProperty(letter)) {
        return MORSE_TABLE[letter];
      } else {
        return letter;  
      }
  
    });  
    return withoutNull.join('')
  }

module.exports = {
    decode
}