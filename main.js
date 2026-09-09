const botoes = document.querySelectorAll("button");
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

    botoes.forEach(function (botao) {
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);
        function botaoClicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false){
                texto.textContent++;
                curtiu = true;
            } else{
                texto.textContent--;
                curtiu = false;
            }
        }
    })
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Retorna ao topo com animação suave ao clicar
btnTopo.addEdgeListener = btnTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});