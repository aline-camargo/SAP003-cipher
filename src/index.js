// Arquivo para lidar com eventos do DOM (botões e etc)

//Escutar botões de Codificar ou Decodificar e chamar suas respectivas funções.
document.getElementById("encode-button").addEventListener("click", encodeChoice);
document.getElementById("decode-button").addEventListener("click", decodeChoice);

// Define as variáveis de mensagem e offset (chave de deslocamento) p/ serem usadas na cifra,
// verifica se o valor do offset é negativo e corrige se for,
// chama a função de cifrar a mensagem e imprime a resposta no DOM.
function encodeChoice() {
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  if (offset < 0) {
    offset *= -1;
  }
  document.getElementById("text-answer").innerHTML = window.cipher.encode(offset, message);
  return;
}

// Define as variáveis de mensagem e offset (chave de deslocamento) p/ serem usadas na cifra,
// verifica se o valor do offset é negativo e corrige se for,
// chama a função de decifrar a mensagem e imprime a resposta no DOM.
function decodeChoice() {
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  if (offset < 0) {
    offset *= -1;
  }
  document.getElementById("text-answer").innerHTML = window.cipher.decode(offset, message);
  return;
}
