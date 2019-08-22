window.cipher = {
  encode: encode,
  decode: decode,
};
// Cifra mensagem c/ offset
function encode(message, offset){
  let answerEncode = "";
  for (let index = 0; index < message.length; ++index) {
    let entryCharCode = message.charCodeAt(index);
      if (entryCharCode >= 97 && entryCharCode <= 122) {
        answerEncode += String.fromCharCode(((entryCharCode -97 + offset)%26) + 97);
      } else if (entryCharCode >= 65 && entryCharCode <= 90){
       answerEncode += String.fromCharCode(((entryCharCode -65 + offset)%26) + 65);
     } else{
       answerEncode += String.fromCharCode(entryCharCode);
     }
  }
  return answerEncode;
}

//Decifra mensagem c/ offset
function decode(message, offset) {
  let answerDecode = "";
  for (let index = 0; index < message.length; ++index) {
    let entryCharCode = message.charCodeAt(index);
      if (entryCharCode >= 97 && entryCharCode <= 122) {
        answerDecode += String.fromCharCode(((entryCharCode -122 - offset)%26) + 122);
      } else if (entryCharCode >= 65 && entryCharCode <= 90) {
        answerDecode += String.fromCharCode(((entryCharCode -90 - offset)%26) + 90);
      } else {
        answerDecode += String.fromCharCode(entryCharCode);
      }
  }
  return answerDecode;
}
