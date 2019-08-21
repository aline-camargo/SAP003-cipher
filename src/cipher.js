//arquivo para funcoes de cifrar e decifrar
//apenas a cifra
window.cipher = {
  encode: encode,
  decode: decode,
};
//encoda msg, desloc
function encode(message, offset){
  let answerEncode = "";
  for (var index = 0; index < message.length; ++index) {
    answerEncode += String.fromCharCode(((message.charCodeAt(index)-65 + offset)%26) + 65);
  }
  return answerEncode;
}

//desencoda msg, desloc
function decode(message, offset) {
  let answer = "";
  for (var index = 0; index < message.length; ++index) {
    answer += String.fromCharCode(((message.charCodeAt(index)-90 - offset)%26) + 90);
  }
  return answer;
}
