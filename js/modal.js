// Obter o modal
var modal = document.getElementById("imageModal");

// Obter o botão que abre o modal
var btn = document.querySelector(".btn-image-modal");

// Obter o elemento <span> que fecha o modal
var span = document.querySelector(".close-modal");

// Quando o usuário clicar no botão, abrir o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fechar o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fechar o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

