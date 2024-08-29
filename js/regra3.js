document.querySelector('.btn-calcular').addEventListener('click', function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos inputs
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);

    // Verifica se os valores são números válidos
    if (!isNaN(value1) && !isNaN(value2) && !isNaN(value3)) {
        // Cálculo da Regra de 3: value4 = (value3 * value2) / value1
        const value4 = (value3 * value2) / value1;

        // Exibe o resultado no input com id value4
        document.getElementById('value4').value = value4.toFixed(2);
    } else {
        // Se algum valor não for um número válido, exibe uma mensagem de erro
        document.getElementById('value4').value = "Erro";
    }
});
