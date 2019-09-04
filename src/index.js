// Arquivo para lidar com eventos do DOM (botões e inputs).

//Função chamada quando o usuário aperta o botão de codificar.
const encodeChoice = () => {
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  document.getElementById("text-answer").innerHTML = window.cipher.encode(offset, message);
  return;
};

//Função chamada quando o usuário aperta o botão de decodificar.
const decodeChoice = () => {
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  document.getElementById("text-answer").innerHTML = window.cipher.decode(offset, message);
  return;
};

//Escutar botões de Codificar ou Decodificar do HTML e chamar suas respectivas funções.
document.getElementById("encode-button").addEventListener("click", encodeChoice);
document.getElementById("decode-button").addEventListener("click", decodeChoice);
