// Variáveis globais para armazenar a quantidade e o preço selecionados
var quantidadeSelecionada = 250; // Valor padrão inicial
var precoSelecionado = "R$ 10.00"; // Valor padrão inicial

// Função para atualizar a quantidade e o preço selecionados
function atualizarQuantidade(quantidade, preco) {
  quantidadeSelecionada = quantidade;
  precoSelecionado = preco;
  document.getElementById("quantidade").innerText = precoSelecionado;
}

// Função para preencher a mensagem do WhatsApp com a quantidade selecionada
function preencherMensagemWhatsApp() {
  // Obter a quantidade selecionada
  var quantidade = quantidadeSelecionada;

  // Formatar a mensagem
  var mensagem = "Olá Lacerra, gostaria de encomendar " + quantidade + "g de café.";

  // Codificar a mensagem para que seja válida em uma URL
  mensagem = encodeURIComponent(mensagem);

  // Construir o link do WhatsApp com a mensagem pré-preenchida
  var linkWhatsapp = "https://wa.me/+553198785477?text=" + mensagem;

  // Redirecionar para o link do WhatsApp
  window.location.href = linkWhatsapp;
}
/*// Função para ocultar a imagem após 4 segundos
function ocultarImagem() {
    setTimeout(function() {
      var imagemInicial = document.getElementById("imagem-inicial");
      imagemInicial.style.opacity = 0;
    }, 2000); // 4000 milissegundos = 4 segundos
  }*/
    


