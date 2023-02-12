const MORSE_TABLE = {
    ' ':      ' ',
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

function decode(str) {

    let arr=[];
    
    for(let i =0 ; i<str.length;i+=10)
    {
        let b = str.slice(i, i+10);
       
        arr.push(b);
    }
    let morse="";
    
  
    let mat=[];
     for(let i = 0; i < arr.length; i++)
    {
       morse="";
       if(arr[i]=="**********")
       {
        morse+=" ";
        mat.push(morse);
        }

       else{
            for(let j = 0; j <= 10; j += 2)
            {
            
            if (arr[i][j] == '1' && arr[i][j+1] == '0')
                {
                    morse += ".";
                }
                else if (arr[i][j] == '1' && arr[i][j+1] == '1')
                {
                    morse += "-";
                }
            
            }
            mat.push(morse);
            }
    }
    let result="";
 for(let i =0;i<mat.length;i++)
 {
     result+=MORSE_TABLE[mat[i]];
 }


    return result;
}


module.exports = {
    decode
}