// Arquivo para lidar com eventos do DOM (botões e etc)

//Função chamada quando o usuário aperta o botão de codificar.
const encodeChoice = () => {
  //Define as variáveis de mensagem e offset de acordo com o input do usuário.
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  //Confere se a offset é negativa, se sim multiplica por -1 para torná-la positiva.
  if (offset < 0) {
    offset *= -1;
  }
  //Chama a função de codificação e retorna seu resultado.
  document.getElementById("text-answer").innerHTML = window.cipher.encode(offset, message);
  return;
};

//Função chamada quando o usuário aperta o botão de decodificar. Mesmas expressões da encodeChoice();, porém para decodificar.
const decodeChoice = () => {
  let message = document.getElementById("text-input").value;
  let offset = parseInt(document.getElementById("offset").value);
  if (offset < 0) {
    offset *= -1;
  }
  document.getElementById("text-answer").innerHTML = window.cipher.decode(offset, message);
  return;
};

//Escutar botões de Codificar ou Decodificar do HTML e chamar suas respectivas funções.
document.getElementById("encode-button").addEventListener("click", encodeChoice);
document.getElementById("decode-button").addEventListener("click", decodeChoice);
