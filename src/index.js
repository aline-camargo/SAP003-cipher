// arquivo para lidar com eventos do DOM (botoes e etc)
// function clickAqui() {
//  ex como chamar a funcao do cipher.js=
//   window.cipher.encode();
// }

function encodeChoice(){
  let message = document.getElementById('text').value;
  let offset = parseInt(document.getElementById('offset').value);
  let answer = window.cipher.encode(message, offset);
  document.getElementById("text-answer").innerHTML = String.fromCharCode(message.charCodeAt() + offset) + String.fromCharCode(answer);
  console.log(answer);
  return
}

function decodeChoice() {
  let message = document.getElementById('text').value;
  let offset = parseInt(document.getElementById('offset').value);
  let answer = window.cipher.encode(message, offset);
  document.getElementById("text-answer").innerText = String.fromCharCode(message.charCodeAt() - offset)
}

//charCodeAt i roda ++i
