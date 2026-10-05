const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
async function main(){
// criar a interface
const rl = readline.createInterface({ input, output });

let continuar = "sim";

// utilizar while para repetir a operação
while (continuar === "sim") {

    // solicitar os dois números
    const numero1 = Number(await rl.question("Digite o primeiro numero: "));
    const numero2 = Number(await rl.question("Digite o segundo numero: "));

    // apresentar os resultados
    console.log("Soma:", numero1 + numero2);
    console.log("Subtração:", numero1 - numero2);
    console.log("Multiplicação:", numero1 * numero2);
    console.log("Divisão:", numero1 / numero2);

    // perguntar se deseja continuar
    continuar = await rl.question("Deseja realizar outro calculo? (sim/não): ");
}

rl.close();
}
main();
