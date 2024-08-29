// function captureScreenshot(){
//     html2canvas(document.querySelector("#capture-area")).then(canvas => {
//         document.body.appendChild(canvas)
//     });
// }

// Seleciona o botão de download
let downloadBtn = document.getElementById("download-btn");

// Função para capturar a área e fazer o download
downloadBtn.onclick = function() {
    html2canvas(document.querySelector("#capture-area")).then(canvas => {
    // Converte o canvas em uma imagem
    let imgData = canvas.toDataURL("image/png"); // ou "image/jpeg" para JPEG

    // Cria um elemento <a> para download
    let link = document.createElement('a');
    link.href = imgData;
    link.download = 'captura.png'; // ou 'captura.jpeg' para JPEG

    // Simula um clique no link para iniciar o download
    link.click();
  });
}

