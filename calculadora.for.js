const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
async function main(){
// criar a interface
const rl = readline.createInterface({ input, output });

// perguntar quantos cálculos serão realizados
const quantidade = Number(await rl.question("Quantos calculos deseja realizar? "));

// utilizar for para repetir a quantidade informada
for (let i = 1; i <= quantidade; i++) {

    console.log(`\nCalculo ${i}`);

    // solicitar os dois números
    const numero1 = Number(await rl.question("Digite o primeiro numero: "));
    const numero2 = Number(await rl.question("Digite o segundo numero: "));

    // apresentar os resultados
    console.table({
        Soma: numero1 + numero2,
        Subtracao: numero1 - numero2,
        Multiplicacao: numero1 * numero2,
        Divisao: numero1 / numero2
    });
}
rl.close();
}
main();