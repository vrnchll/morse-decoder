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
   let max = 10;
   let str = "";
   let str2 = [];
   var buf = "";
   let counter = 0;
   let result ="";
   for(let i = 0 ; i <= expr.length; i++){
     if(i == max){
     if(str == "**********"){
       result +=" ";
       str="";
       str2 ="";
       str+=expr[i];
       max+=10;
       continue;
     }
      str = str.split('');
      while(str[0]!="1") str.splice(0,1);
      for(let j = 0; j < str.length ; j++){
        buf+=str[j];
        counter++;

        if(counter == 2){
          if(buf == "10"){
            str2+="."
            buf="";
            counter = 0;
          }
          if(buf == "11"){
            str2+="-";
            buf="";
            counter = 0;
          }

        }
      }
      result+=MORSE_TABLE[str2];
      str="";
      str2="";
      max+=10;
     }
       str+=expr[i];
   }
   return result;
}

module.exports = {
    decode
}