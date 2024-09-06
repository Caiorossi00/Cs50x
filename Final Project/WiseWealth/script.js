let contador = JSON.parse(localStorage.getItem("contador")) || 0;

const transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];
const dataMeses = JSON.parse(localStorage.getItem("transacoesData")) || {
  Janeiro: [],
  Fevereiro: [],
  Março: [],
  Abril: [],
  Maio: [],
  Junho: [],
  Julho: [],
  Agosto: [],
  Setembro: [],
  Outubro: [],
  Novembro: [],
  Dezembro: [],
};
const chaves = Object.keys(dataMeses);

function ordenarTransacoes(ordemTransacao) {
  const order = {
    Salário: 1,
    "Entrada-extra": 2,
    "Fatura-externa": 3,
    "Fatura-interna-(PF)": 4,
    "Fatura-interna-(PJ)": 5,
    "Gastos-extras": 6,
  };

  return ordemTransacao.sort((a, b) => {
    return (order[a.option] || 100) - (order[b.option] || 100);
  });
}

function salvarNoLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

// CRUD

// Create
let saldoTotal = 0;

function adicionarTransacao() {
  const tipoTransacao = document.getElementById("tipo-transacao").value;
  const valor = parseFloat(document.getElementById("valor").value);

  if (tipoTransacao === "entrada") {
    saldoTotal.entradas.push(valor);
  } else if (tipoTransacao === "despesa") {
    saldoTotal.saidas.push(valor);
  }

  atualizarSaldo();
}

// Read
function atualizarSaldo() {
  saldoTotal = 0;
  transacoes.forEach((it) => {
    saldoTotal += it.tipo === "entrada" ? it.valor : -it.valor;
  });

  const somaTotal = document.querySelector(".saldo-dinamico");
  somaTotal.textContent = `${saldoTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  if (saldoTotal >= 0.1) {
    somaTotal.classList.add("saldo-dinamico-verde");
    somaTotal.classList.remove("saldo-dinamico-vermelho");
  } else if (saldoTotal < 0) {
    somaTotal.classList.add("saldo-dinamico-vermelho");
    somaTotal.classList.remove("saldo-dinamico-verde");
  }
}

atualizarSaldo();

class Transacao {
  constructor(id, descricao, valor, tipo, opcao) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.tipo = tipo;
    this.option = opcao;
  }
}

function gerarIdAleatorio(comprimento) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const caracteresArray = Array.from(caracteres);
  const idArray = new Array(comprimento);

  for (let i = 0; i < comprimento; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteresArray.length);
    idArray[i] = caracteresArray[indiceAleatorio];
  }

  return idArray.join("");
}

function adicionarTransacaoComDescricao() {
  const descricaoInput = document.getElementById("descricao");
  const descricao = descricaoInput.value;
  const valorInput = document.getElementById("valor");
  const valor = parseFloat(valorInput.value);
  const tipoTransacao = document.getElementById("tipo-transacao");
  const categoriaTransacao = document.getElementById("categoria-transacao");

  if (valor < 0) {
    valorInput.value = 0;
    alert("Insira um número válido");
    return;
  }

  if (descricao.trim() === "") {
    alert("Por favor, insira uma descrição.");
    return;
  } else if (isNaN(valor)) {
    alert("Por favor, insira um número válido para o valor.");
    return;
  }

  if (categoriaTransacao.value === "") {
    alert("Por favor, selecione uma categoria.");
    return;
  }

  if (tipoTransacao.value === "") {
    alert("Por favor, selecione o tipo de transação (entrada ou saída).");
    return;
  }

  const transacao = new Transacao(
    gerarIdAleatorio(12),
    descricao,
    valor,
    tipoTransacao.value,
    categoriaTransacao.value
  );
  transacoes.push(transacao);
  dataMeses[chaves[contador]].push(transacao);

  descricaoInput.value = "";
  valorInput.value = "";
  categoriaTransacao.value = "";
  tipoTransacao.value = "";

  ordenarTransacoes(dataMeses[chaves[contador]]);
  atualizarSaldo();
  exibirTransacoes();

  salvarNoLocalStorage("transacoes", transacoes);
  salvarNoLocalStorage("transacoesData", dataMeses);
}

function exibirTransacoes() {
  const infoTransacoes = document.querySelector(".gasto-detalhado");
  infoTransacoes.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("vitrine");

  if (!dataMeses[chaves[contador]].length) {
    const divEmpty = criarElemento(
      "div",
      "divEmpty",
      "Você ainda não possui nenhum lançamento no mês de " + chaves[contador]
    );
    ul.appendChild(divEmpty);
  } else {
    dataMeses[chaves[contador]].forEach((transacao, index) => {
      ul.appendChild(criarTransacaoItem(transacao, index));
    });
  }

  infoTransacoes.appendChild(ul);
  ordenarTransacoes(dataMeses[chaves[contador]]);
}

function criarElemento(tag, classe, texto = "") {
  const elemento = document.createElement(tag);
  if (classe) elemento.classList.add(classe);
  if (texto) elemento.textContent = texto;
  return elemento;
}

function criarTransacaoItem(transacao, index) {
  const li = criarElemento(
    "li",
    transacao.tipo === "entrada"
      ? "gasto-detalhado-entrada"
      : "gasto-detalhado-saida"
  );

  const deleteButton = criarElemento("button", "botao-excluir", "x");
  deleteButton.onclick = () => deletarTransacao(transacao.id, index);

  const content = criarElemento(
    "span",
    null,
    `${transacao.option.replace(/-/g, " ")} - ${
      transacao.descricao
    }, ${transacao.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`
  );

  const iconeFlecha = criarElemento("span", "arrow");
  changeBackgroundColor(iconeFlecha, transacao.option);

  const iconesDisplay = criarElemento("div", "div-icones");
  iconesDisplay.append(iconeFlecha, content);

  li.append(iconesDisplay, deleteButton);

  return li;
}

exibirTransacoes();

function changeBackgroundColor(lista, categoria) {
  const colorMap = {
    Salário: "#00BF63",
    "Entrada-extra": "#00BF63",
    "Fatura-externa": "#FF5757",
    "Fatura-interna-(PF)": "#FF5757",
    "Fatura-interna-(PJ)": "#FF5757",
    "Gastos-extras": "#FF5757",
  };

  const color = colorMap[categoria];

  if (color) {
    lista.style.borderBottom = `12px solid ${color}`;
  }
}

const alterarMes1 = document.querySelector(".display-mes");
alterarMes1.innerText = chaves[contador];

function passarMes() {
  const alterarMes = document.querySelector(".display-mes");
  if (contador < 11) {
    contador++;
    salvarNoLocalStorage("contador", contador);
    alterarMes.innerText = chaves[contador];
    exibirTransacoes();
  }
}

const btnPassarMes = document.querySelector(".btn-alterar-mes");
btnPassarMes.addEventListener("click", passarMes);

function voltarMes() {
  const alterarMes = document.querySelector(".display-mes");
  if (contador > 0) {
    contador--;
    salvarNoLocalStorage("contador", contador);
    alterarMes.innerText = chaves[contador];
    exibirTransacoes();
  }
}

const btnVoltarMes = document.querySelector(".btn-voltar-mes");
btnVoltarMes.addEventListener("click", voltarMes);

// Delete
function deletarTransacao(identidadeTransacao, indexMes) {
  dataMeses[chaves[contador]].splice(indexMes, 1);

  const indiceTransacao = transacoes.findIndex(
    (objeto) => objeto.id === identidadeTransacao
  );

  if (indiceTransacao !== -1) {
    transacoes.splice(indiceTransacao, 1);
  }

  exibirTransacoes();
  atualizarSaldo();

  salvarNoLocalStorage("transacoesData", dataMeses);
  salvarNoLocalStorage("transacoes", transacoes);
}

// Modal
document.addEventListener("DOMContentLoaded", function () {
  const howToUseModal = document.getElementById("how-to-use-modal");
  const privacyPolicyModal = document.getElementById("privacy-policy-modal");
  const termsOfUseModal = document.getElementById("terms-of-use-modal");

  const openModal = (modal) => {
    modal.style.display = "block";
  };

  const closeModal = (modal) => {
    modal.style.display = "none";
  };

  document.getElementById("how-to-use-link").onclick = function () {
    openModal(howToUseModal);
    return false;
  };

  document.getElementById("close-how-to-use").onclick = function () {
    closeModal(howToUseModal);
  };

  document.getElementById("privacy-policy-link").onclick = function () {
    openModal(privacyPolicyModal);
  };

  document.getElementById("close-privacy").onclick = function () {
    closeModal(privacyPolicyModal);
  };

  document.getElementById("terms-of-use-link").onclick = function () {
    openModal(termsOfUseModal);
  };

  document.getElementById("close-terms").onclick = function () {
    closeModal(termsOfUseModal);
  };

  window.onclick = function (event) {
    if (event.target === howToUseModal) {
      closeModal(howToUseModal);
    }
    if (event.target === privacyPolicyModal) {
      closeModal(privacyPolicyModal);
    }
    if (event.target === termsOfUseModal) {
      closeModal(termsOfUseModal);
    }
  };
});
