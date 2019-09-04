// Cifra mensagem c/ offset
const encode = (offset, message) => {
  let answerEncode = "";
  for (let char of message){
    let entryCharCode = message.charCodeAt(message.indexOf(char));
    if (entryCharCode >= 97 && entryCharCode <= 122) {
      //Define qual será a primeira letra do alfabeto considerando o sinal do offset.
      let firstLetter = offset < 0 ? 122 : 97;
      answerEncode += String.fromCharCode(((entryCharCode -firstLetter + offset)%26) + firstLetter);
    } else if (entryCharCode >= 65 && entryCharCode <= 90) {
      firstLetter = offset < 0 ? 90 : 65;
      answerEncode += String.fromCharCode(((entryCharCode -firstLetter + offset)%26) + firstLetter);
    } else {
      answerEncode += String.fromCharCode(entryCharCode);
    }
  }
  return answerEncode;
};

//Decifra mensagem c/ offset. Mesmas operações da função encode, porém com o alfabeto e offset invertidos.
const decode = (offset, message) => {
  let answerDecode = "";
  for (let char of message){
    let entryCharCode = message.charCodeAt(message.indexOf(char));
    if (entryCharCode >= 97 && entryCharCode <= 122) {
      let firstLetter = offset < 0 ? 97 : 122;
      answerDecode += String.fromCharCode(((entryCharCode -firstLetter - offset)%26) + firstLetter);
    } else if (entryCharCode >= 65 && entryCharCode <= 90) {
      firstLetter = offset < 0 ? 65 : 90;
      answerDecode += String.fromCharCode(((entryCharCode -firstLetter - offset)%26) + firstLetter);
    } else {
      answerDecode += String.fromCharCode(entryCharCode);
    }
  }
  return answerDecode;
};

window.cipher = {
  encode: encode,
  decode: decode,
};
