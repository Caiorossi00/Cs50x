const denominacoes = [
  { valor: 100, imagem: "./assets/100.jpg" },
  { valor: 50, imagem: "./assets/50.jpg" },
  { valor: 20, imagem: "./assets/20.jpg" },
  { valor: 10, imagem: "./assets/10.jpg" },
  { valor: 5, imagem: "./assets/5.jpg" },
  { valor: 2, imagem: "./assets/2.jpg" },
  { valor: 1, imagem: "./assets/1.png" },
  { valor: 0.5, imagem: "./assets/0,50.png" },
  { valor: 0.25, imagem: "./assets/0,25.png" },
  { valor: 0.1, imagem: "./assets/0,10.png" },
  { valor: 0.05, imagem: "./assets/0,05.png" },
];

const quantidades = {};
let valorTotalEmCaixa = 0;

document.addEventListener("DOMContentLoaded", criarCamposQuantidades);

function criarCamposQuantidades() {
  const notasDiv = document.getElementById("quantidades-notas");
  const moedasDiv = document.getElementById("quantidades-moedas");
  notasDiv.innerHTML = "";
  moedasDiv.innerHTML = "";

  denominacoes.forEach((denominacao) => {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";
    container.style.position = "relative";

    const valorTotalDenominacao = document.createElement("span");
    valorTotalDenominacao.id = `valor-${denominacao.valor}`;
    valorTotalDenominacao.textContent = "R$ 0,00";
    container.appendChild(valorTotalDenominacao);

    const img = document.createElement("img");
    img.src = denominacao.imagem;
    img.alt = `${denominacao.valor} Reais`;

    const input = document.createElement("input");
    input.type = "number";
    input.id = `qtd-${denominacao.valor}`;
    input.min = "0";
    input.addEventListener("input", calcularValorEmCaixa);

    container.appendChild(img);
    container.appendChild(input);

    if (denominacao.valor <= 1) {
      img.classList.add("moeda-menor");
      moedasDiv.appendChild(container);
    } else {
      notasDiv.appendChild(container);
    }
  });
}

function calcularValorEmCaixa() {
  valorTotalEmCaixa = 0;
  denominacoes.forEach((denominacao) => {
    const input = document.getElementById(`qtd-${denominacao.valor}`);
    const quantidade = parseInt(input.value) || 0;
    quantidades[denominacao.valor] = quantidade;
    valorTotalEmCaixa += denominacao.valor * quantidade;
    atualizarValorTotalDenominacao(denominacao.valor, quantidade);
  });

  document.getElementById(
    "valorTotal"
  ).textContent = `Valor total em caixa: R$ ${valorTotalEmCaixa.toFixed(2)}`;
  document.getElementById("valorDesejado").disabled = false;
}

function atualizarValorTotalDenominacao(valor, quantidade) {
  const valorTotalElement = document.getElementById(`valor-${valor}`);
  valorTotalElement.textContent = `R$ ${(valor * quantidade).toFixed(2)}`;
}

function calcularTroco() {
  const valorDesejado = parseFloat(
    document.getElementById("valorDesejado").value.replace(",", ".")
  );
  if (
    isNaN(valorDesejado) ||
    valorDesejado < 0 ||
    valorDesejado > valorTotalEmCaixa
  ) {
    alert(
      "Valor desejado inválido. Insira um valor positivo menor ou igual ao valor em caixa."
    );
    return;
  }

  const valorRetirar = valorTotalEmCaixa - valorDesejado;
  const troco = calcularNotasMoedas(valorRetirar);

  const valorRetirado = valorRetirar - troco.valorRestante;

  exibirResultados(
    troco.notasMoedas,
    valorRetirado,
    valorDesejado,
    troco.valorRestante
  );
}

function calcularNotasMoedas(valorRetirar) {
  const troco = {};
  let valorRestante = valorRetirar;

  denominacoes.forEach((denominacao) => {
    const qtdUsar = Math.min(
      Math.floor(valorRestante / denominacao.valor),
      quantidades[denominacao.valor]
    );
    troco[denominacao.valor] = qtdUsar;
    valorRestante -= qtdUsar * denominacao.valor;
    if (valorRestante < 0.01) valorRestante = 0;
  });

  return { notasMoedas: troco, valorRestante };
}

function exibirResultados(troco, valorRetirar, valorDesejado, valorRestante) {
  const elementoExibicao = document.getElementById("exibicao");
  elementoExibicao.innerHTML = "";

  let resultado = `Valor em Caixa: R$ ${valorTotalEmCaixa.toFixed(2)}<br>
                     Valor a Retirar: R$ ${valorRetirar.toFixed(2)}<br>
                     Valor Restante: R$ ${valorDesejado.toFixed(2)}<br><br>
                     Retire:<br>`;

  elementoExibicao.innerHTML += resultado;

  const containerImagens = document.createElement("div");
  containerImagens.id = "imagensTroco";
  containerImagens.style.display = "flex";
  containerImagens.style.flexWrap = "wrap";
  containerImagens.style.gap = "10px";
  containerImagens.style.marginTop = "10px";

  const sortedDenominacoes = [...denominacoes].sort(
    (a, b) => b.valor - a.valor
  );

  sortedDenominacoes.forEach((denominacao) => {
    const valor = denominacao.valor;
    const quantidade = troco[valor];

    if (quantidade > 0) {
      const imgContainer = document.createElement("div");
      imgContainer.style.display = "flex";
      imgContainer.style.flexDirection = "column";
      imgContainer.style.alignItems = "center";
      imgContainer.style.marginBottom = "10px";

      const img = document.createElement("img");
      img.src = denominacao.imagem;
      img.alt = `${valor} Reais`;
      if (denominacao.valor <= 1) {
        img.classList.add("moeda-menor");
      } else {
        img.style.width = "150px";
      }
      img.style.marginBottom = "5px";

      const texto = document.createElement("span");
      texto.textContent = `x${quantidade} = R$ ${(valor * quantidade).toFixed(
        2
      )}`;

      imgContainer.appendChild(img);
      imgContainer.appendChild(texto);
      containerImagens.appendChild(imgContainer);
    }
  });

  elementoExibicao.appendChild(containerImagens);

  if (valorRestante > 0) {
    const mensagem = document.createElement("p");
    mensagem.style.marginTop = "20px";
    mensagem.textContent = `Não foi possível retirar exatamente o valor desejado. O valor mais próximo possível foi retirado. Valor restante não retirado: R$ ${valorRestante.toFixed(
      2
    )}`;
    elementoExibicao.appendChild(mensagem);
  }
}

const modal = document.getElementById("instrucoesModal");
const btn = document.getElementById("instrucoes-link");
const span = document.getElementsByClassName("close-button")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
