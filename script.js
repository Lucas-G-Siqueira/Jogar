const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");
const fogos = document.getElementById("fogos");
let movendo = true;

function moverBotaoAleatoriamente() {
  if (!movendo) return;
  const largura = window.innerWidth - 100;
  const altura = window.innerHeight - 50;
  const x = Math.random() * largura;
  const y = Math.random() * altura;
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
}
setInterval(moverBotaoAleatoriamente, 700);

btnNao.addEventListener("click", () => {
  mensagem.textContent = "Mano Tu é Gay ?";
  movendo = false;
  setTimeout(() => {
    mensagem.textContent = "";
    document.body.style.animation = "flash 0.2s infinite";
    setTimeout(() => {
      document.body.style.animation = "";
      movendo = true;
    }, 3000);
  }, 3000);
});

btnSim.addEventListener("click", () => {
  mensagem.textContent = "Bora X1 Então Seu Merda";
  movendo = false;
  btnSim.style.display = "none";
  btnNao.style.display = "none";

  setTimeout(() => {
    mostrarFogos();
    setTimeout(() => {
      window.close(); // Pode não funcionar em navegadores modernos
    }, 1000);
  }, 1000);
});

function mostrarFogos() {
  fogos.style.display = "block";
  for (let i = 0; i < 100; i++) {
    const part = document.createElement("div");
    part.className = "fogo";
    part.style.left = `${Math.random() * window.innerWidth}px`;
    part.style.top = `${Math.random() * window.innerHeight}px`;
    part.style.setProperty("--x", `${(Math.random() - 0.5) * 200}px`);
    part.style.setProperty("--y", `${(Math.random() - 0.5) * 200}px`);
    fogos.appendChild(part);
    setTimeout(() => part.remove(), 1000);
  }
}
