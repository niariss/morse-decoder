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

    let wordsBolean = expr.split('**********');
    
    let lettersBolean = [];
    let lettersMorse = [];
    let lettersReadable = [];
    let wordsReadable = [];
    
    for (let j = 0; j < wordsBolean.length; j++) {
    
        for (let i = 1; i <= wordsBolean[j].length/10; i++){
                lettersBolean.push(wordsBolean[j].substring((i-1)*10, i*10));
    
            };
    
    for (let j = 0; j < lettersBolean.length; j++){
    
    
    
            for (let i = 1; i <= lettersBolean[j].length/2; i++){
    
                let morseSymbol = lettersBolean[j].substring((i-1)*2, i*2);
    
                if (morseSymbol === '10'){
                    lettersMorse.push('.');
                } else if (morseSymbol === '11'){
                    lettersMorse.push('-');
                };
    
            
            };
            let letterMorse = lettersMorse.join('');
    
            let letterReadable = MORSE_TABLE[letterMorse];
    
            lettersReadable.push(letterReadable);
            lettersMorse = [];
    
    
        };
    
    wordsReadable.push(lettersReadable.join(''));
    lettersReadable = [];
    lettersBolean = [];
    
    };
    
    return wordsReadable.join(' ')
    
}

module.exports = {
    decode
}