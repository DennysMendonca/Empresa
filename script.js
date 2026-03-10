// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});

// Máscara para Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = value;
});

// Lógica de Salvar
document.getElementById('formFuncionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você integraria com um banco de dados
    alert("Dados validados com sucesso!\nFuncionário: " + document.getElementById('nome').value + " pronto para ser salvo.");
    
    console.log({
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        cargo: document.getElementById('cargo').value
    });
});
