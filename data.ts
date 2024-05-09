const teclado = require ('prompt-sync')();
let dia: string = ``;
let mes: string = ``;
let ano: string = ``;

function sair():void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);
}

function dataCompleta (dia:string, mes:string, ano:string):void{
    console.log(` data é: ${dia}/${mes}/${ano}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu();

    var dataCompleta = new Date( 2 ,5 , 2024);
    var day = dataCompleta.getDate();

    console.log(day); 


}

function selecao():void{
    dia = teclado(`Digite o dia: `);
    mes = teclado(`Digite o mes: `);
    ano = teclado(`Digite o ano: `);

    dataCompleta(dia, mes ,ano);
}

function menu():void{
    console.clear();
    console.log(`----------Selecione a data----------`);
    console.log();
    console.log(`Digite a opção desejada`);
    console.log(` 0 - Sair`);
    console.log(`1 - dataCompleta`);
    let opcao: number = parseInt(teclado('Digite a opção:'));
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



