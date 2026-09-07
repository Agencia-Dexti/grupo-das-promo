// ===== Configuração das categorias =====
// Troque o campo "link" de cada categoria pelo link real do grupo de WhatsApp
// (ex: "https://chat.whatsapp.com/xxxxxxxxxxxxxxxx") quando os grupos estiverem prontos.
// O campo "cor" deve ser uma das classes já definidas no estilo.css:
// cor-mostarda, cor-verde-oliva, cor-vermelha-cat, cor-azul, cor-verde-claro, cor-roxo
// O campo "rotacao" é o leve giro da etiqueta, em graus (positivo ou negativo).
const listaCategorias = [
  { nome: "Casa e Decoração", link: "#", cor: "cor-mostarda", rotacao: -0.8 },
  { nome: "Moda Feminina", link: "https://chat.whatsapp.com/IxaxIOgYHZoIXVvBsXiN1e", cor: "cor-roxo", rotacao: 0.8 },
  { nome: "Moda Masculina", link: "https://chat.whatsapp.com/DIKFwv0EzV99Hm5zyXNABa", cor: "cor-vermelha-cat", rotacao: -0.8 },
  { nome: "Eletrônicos", link: "https://chat.whatsapp.com/CxTh2BiNFe8IOwWE2odwav", cor: "cor-azul", rotacao: 0.8 },
  { nome: "Esportes", link: "https://chat.whatsapp.com/E63NvLoEUWeIQC6uGYAd7q", cor: "cor-laranja", rotacao: -0.8 },
  { nome: "Variedades", link: "https://chat.whatsapp.com/B8uycnIUSVfJqT22A8HvSn", cor: "cor-verde-oliva", rotacao: 0.8 },
];

// Monta uma etiqueta de categoria (elemento <a>) a partir dos dados de uma categoria
function criarEtiquetaCategoria(categoria) {
  const etiqueta = document.createElement("a");
  etiqueta.href = categoria.link;
  etiqueta.target = "_blank";
  etiqueta.rel = "noopener noreferrer";
  etiqueta.className = `etiqueta-categoria ${categoria.cor}`;
  etiqueta.style.transform = `rotate(${categoria.rotacao}deg)`;

  etiqueta.innerHTML = `
    <p class="nome-categoria">${categoria.nome}</p>
    <div class="linha-corte-categoria">
      <p class="texto-entrar-categoria">
        Entrar no grupo <i class="fa-brands fa-whatsapp"></i>
      </p>
    </div>
  `;

  return etiqueta;
}

// Ativa scroll
const secoesAnimadas = document.querySelectorAll('.animar-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');

      // A animação acontece apenas uma vez
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

secoesAnimadas.forEach((secao) => {
  observer.observe(secao);
});

// Renderiza todas as etiquetas de categoria dentro da grade
function renderizarCategorias() {
  const grade = document.getElementById("grade-categorias");
  if (!grade) return;

  listaCategorias.forEach((categoria) => {
    grade.appendChild(criarEtiquetaCategoria(categoria));
  });
}

// Atualiza o ano no rodapé automaticamente
function atualizarAnoRodape() {
  const elementoAno = document.getElementById("anoAtual");
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderizarCategorias();
  atualizarAnoRodape();
});