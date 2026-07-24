const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);
function botaoClicado() {
let texto = botao.querySelector("span");
texto.textContent++;
}