var teclado = require('prompt-sync')();
var dia = "";
var mes = "";
var ano = "";
function sair() {
    console.clear();
    console.log("Fim de programa...");
    process.exit(0);
}
function dataCompleta(dia, mes, ano) {
    console.log(" data \u00E9: ".concat(dia, "/").concat(mes, "/").concat(ano));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
    var dataCompleta = new Date(2, 5, 2024);
    var day = dataCompleta.getDate();
    console.log(day);
}
function selecao() {
    dia = teclado("Digite o dia: ");
    mes = teclado("Digite o mes: ");
    ano = teclado("Digite o ano: ");
    dataCompleta(dia, mes, ano);
}
function menu() {
    console.clear();
    console.log("----------Selecione a data----------");
    console.log();
    console.log("Digite a op\u00E7\u00E3o desejada");
    console.log(" 0 - Sair");
    console.log("1 - dataCompleta");
    var opcao = parseInt(teclado('Digite a opção:'));
    switch (opcao) {
        case 0:
            sair();
            break;
        case 1:
            selecao();
            break;
        default:
            break;
    }
    //selecao(opcao);
}
menu();
