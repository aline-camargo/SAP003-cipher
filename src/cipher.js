//arquivo para funcoes de cifrar e decifrar
//apenas a cifra
window.cipher = {
  encode: encode,
  decode: decode
};
//encoda msg, desloc
function encode(message, offset){
  let charCodesMessage = [];
  for (var index = 0; index < message.length; ++index) {
    charCodesMessage.push(message.charCodeAt(index)+offset);
  }
  return charCodesMessage.toString();
}

//desencoda msg, desloc
function decode(message, offset) {

}
