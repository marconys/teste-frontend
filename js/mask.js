// Função para aplicar a máscara de CPF
function maskCPF(value) {
    return value
        .replace(/\D/g, '') // Remove qualquer caractere que não seja dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros 3 dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os 6 dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um hífen após os 9 dígitos
}

// Função para aplicar a máscara de Telefone
function maskTelefone(value) {
    return value
        .replace(/\D/g, '') // Remove qualquer caractere que não seja dígito
        .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses em torno dos primeiros 2 dígitos
        .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona um hífen após os primeiros 5 dígitos
        .replace(/(-\d{4})\d+?$/, '$1'); // Limita a quantidade de dígitos após o hífen
}

// Aplicar as máscaras em tempo real
document.getElementById('cpf').addEventListener('input', function() {
    this.value = maskCPF(this.value);
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = maskTelefone(this.value);
});

document.getElementById('send').addEventListener('click', function() {
    alert('Mensagem enviada com sucesso!');
    location.reload();
  });
