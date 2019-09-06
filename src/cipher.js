// Cifra mensagem c/ offset
const encode = (offset, message) => {
  let answerEncode = "";
  for (let char of message) {
    const entryCharCode = message.charCodeAt(message.indexOf(char));
    const isLowerCase = entryCharCode >= 97 && entryCharCode <= 122;
    const isUpperCase = entryCharCode >= 65 && entryCharCode <= 90;
    if (isLowerCase) {
      //Define qual será a primeira letra do alfabeto considerando o sinal do offset.
      const firstLetter = offset < 0 ? 122 : 97;
      answerEncode += String.fromCharCode(((entryCharCode -firstLetter + offset)%26) + firstLetter);
    } else if (isUpperCase) {
      const firstLetter = offset < 0 ? 90 : 65;
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
  for (let char of message) {
    const entryCharCode = message.charCodeAt(message.indexOf(char));
    const isLowerCase = entryCharCode >= 97 && entryCharCode <= 122;
    const isUpperCase = entryCharCode >= 65 && entryCharCode <= 90;
    if (isLowerCase) {
      const firstLetter = offset < 0 ? 97 : 122;
      answerDecode += String.fromCharCode(((entryCharCode -firstLetter - offset)%26) + firstLetter);
    } else if (isUpperCase) {
      const firstLetter = offset < 0 ? 65 : 90;
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
