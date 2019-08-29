// Cifra mensagem c/ offset
const encode = (offset, message) => {
  //String vazia que irá conter mensagem cifrada.
  let answerEncode = "";
  for (let index = 0; index < message.length; ++index) {
    //Verifica se o caractere é minúsculo, se sim converte de acordo com expressão e offset.
    if (message.charCodeAt(index) >= 97 && message.charCodeAt(index) <= 122) {
      //Verifica se o offset é positivo ou negativo. P/ negativo a primeira letra do alfabeto se torna a última.
      let firstLetter = offset < 0 ? 122 : 97;
      answerEncode += String.fromCharCode(((message.charCodeAt(index) -firstLetter + offset)%26) + firstLetter);
    //Verifica se o caractere é maiúsculo, se sim converte de acordo com expressão e offset.
    } else if (message.charCodeAt(index) >= 65 && message.charCodeAt(index) <= 90) {
      let firstLetter = offset < 0 ? 90 : 65;
      answerEncode += String.fromCharCode(((message.charCodeAt(index) -firstLetter + offset)%26) + firstLetter);
    //Não altera caracteres de símbolos, números e espaço.
    } else {
      answerEncode += String.fromCharCode(message.charCodeAt(index));
    }
  }
  return answerEncode;
};

//Decifra mensagem c/ offset. Mesmas operações da função encode, porém com o alfabeto e offset invertidos.
const decode = (offset, message) => {
  let answerDecode = "";
  for (let index = 0; index < message.length; ++index) {
    if (message.charCodeAt(index) >= 97 && message.charCodeAt(index) <= 122) {
      let firstLetter = offset < 0 ? 97 : 122;
      answerDecode += String.fromCharCode(((message.charCodeAt(index) -firstLetter - offset)%26) + firstLetter);
    } else if (message.charCodeAt(index) >= 65 && message.charCodeAt(index) <= 90) {
      let firstLetter = offset < 0 ? 65 : 90;
      answerDecode += String.fromCharCode(((message.charCodeAt(index) -firstLetter - offset)%26) + firstLetter);
    } else {
      answerDecode += String.fromCharCode(message.charCodeAt(index));
    }
  }
  return answerDecode;
};

window.cipher = {
  encode: encode,
  decode: decode,
};
