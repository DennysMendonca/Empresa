// CONFIGURAÇÃO - COLE O LINK DO GOOGLE AQUI
const URL_GOOGLE_SHEET = "https://script.google.com/macros/s/AKfycbxORHScl-M4a14MGwIpZFV3xpAAbhJ4iyxpXvoFPwryAuJF3sM88DeyYeAhJVpz3S_5/exec";

// Máscara CPF
document.getElementById('cpf').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = v;
});

// Máscara Telefone
document.getElementById('telefone').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
    e.target.value = v;
});

// Máscara Salário
document.getElementById('salario').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = (v / 100).toFixed(2).replace(".", ",");
    v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    e.target.value = v ? "R$ " + v : "";
});

// Função Sair
function sair() {
    if(confirm("Deseja realmente sair? Dados não salvos serão perdidos.")) {
        window.close(); // Fecha a aba (funciona se a aba foi aberta via script)
        window.location.href = "about:blank"; // Fallback
    }
}

// Envio para o Google Sheets
document.getElementById('formFuncionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.btn-save');
    btn.innerText = "Enviando...";
    btn.disabled = true;

    const formData = new FormData(this);
    const data = new URLSearchParams(formData);

    fetch(URL_GOOGLE_SHEET, {
        method: 'POST',
        body: data
    })
    .then(() => {
        alert("Cadastrado com sucesso na planilha!");
        this.reset();
    })
    .catch(() => alert("Erro ao conectar com a planilha."))
    .finally(() => {
        btn.innerText = "Salvar";
        btn.disabled = false;
    });
});
