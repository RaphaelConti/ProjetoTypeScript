let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as unknown as number;

campoSaldo = 0

function somarAoSaldo(soma): void {
    campoSaldo += soma;
}

function limparSaldo() {
    campoSaldo = 0;
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/*
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
*/