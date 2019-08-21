//arquivo para funcoes de cifrar e decifrar
//apenas a cifra
window.cipher = {
  encode: encode,
  decode: decode
};
//encoda msg, desloc
function encode(message, offset){
  let charCodesMessage = "";
  for (var index = 0; index < message.length; ++index) {
    charCodesMessage += String.fromCharCode(((message.charCodeAt(index)-65 + offset)%26) + 65);
  }
  return charCodesMessage;
}

//desencoda msg, desloc
function decode(message, offset) {
  // let charCodesMessage = "";
  // for (var index = 0; index < message.length; ++index) {
  //   charCodesMessage += String.fromCharCode(message.charCodeAt(index)-offset);
  // }
  // return charCodesMessage;
}
