document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Selecionar os campos do formulário
    const email = document.getElementById('eml');
    const username = document.getElementById('txt');
    const password = document.getElementById('pwd');
    const errorMessage = document.getElementById('error-message');

    // Verificar se todos os campos estão preenchidos
    if (email.value === '' || username.value === '' || password.value === '') {
        // Impedir o envio do formulário
        event.preventDefault();
        // Exibir a mensagem de erro
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else {
        // Esconder a mensagem de erro
        errorMessage.style.display = 'none';
    }
});

