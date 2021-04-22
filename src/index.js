const message = document.getElementById("text-input");
const offset = document.getElementById("offset");
const resultTarget = document.getElementById("text-answer");

document.getElementById("encode-button").addEventListener("click", () => {
  resultTarget.innerHTML = cipher.encode(Number(offset.value), message.value);
});
document.getElementById("decode-button").addEventListener("click", () => {
  resultTarget.innerHTML = window.cipher.decode(Number(offset.value), message.value);
});
