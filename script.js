// --- MÁSCARA DE CPF (000.000.000-00) ---
document.getElementById('cpf').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = value;
});

// --- MÁSCARA DE TELEFONE ((00) 00000-0000) ---
document.getElementById('telefone').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = value;
});

// --- MÁSCARA DE SALÁRIO (R$ 0.000,00) ---
document.getElementById('salario').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, "");
    
    // Converte para formato decimal
    value = (value / 100).toFixed(2) + "";
    value = value.replace(".", ",");
    
    // Adiciona pontos de milhar
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    
    e.target.value = value ? "R$ " + value : "";
});

// --- LÓGICA DE SALVAR ---
document.getElementById('formFuncionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pegaria os valores para enviar ao servidor
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    
    alert(`Sucesso!\nOs dados de ${nome} (CPF: ${cpf}) foram validados e estão prontos para o banco de dados.`);
    
    console.log("Dados prontos:", {
        nome: nome,
        cpf: cpf,
        salario: document.getElementById('salario').value
    });
});
