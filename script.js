function gerarDigito(base) {
    let multiplicador = base.length + 1;
    let soma = 0;
    for (let numero of base) {
        soma += Number(numero) * multiplicador--;
    }
    const resto = soma % 11;
    return resto < 2 ? "0" : (11 - resto).toString();
}

function gerarCPF() {
    let noveDigitos = "";
    for (let i = 0; i < 9; i++) {
        noveDigitos += Math.floor(Math.random() * 10).toString();
    }

    const d1 = gerarDigito(noveDigitos);
    const d2 = gerarDigito(noveDigitos + d1);
    const cpf = noveDigitos + d1 + d2;

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function renderizarCPF() {
    const display = document.getElementById('cpf-resultado');
    display.innerText = gerarCPF();
}

function copiarCPF() {
    const cpf = document.getElementById('cpf-resultado').innerText;
    navigator.clipboard.writeText(cpf);
    
    // Mostrar aviso de copiado
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 2000);
}

// Gerar um ao carregar a página
window.onload = renderizarCPF;