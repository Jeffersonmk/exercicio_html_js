const form = document.getElementById('form-teste');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroCampoA = parseInt(document.getElementById('numero-campo-a').value);
    const numeroCampoB = parseInt(document.getElementById('numero-campo-b').value);

    if (numeroCampoA < numeroCampoB) {
        alert('Formulário Válido: Campo B é maior que o campo A');
    } else {
        alert('Formulário Inválido: Campo B tem que ser maior que o campo A');
    }
});

