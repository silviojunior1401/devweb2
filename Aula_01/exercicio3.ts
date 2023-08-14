// Faça um programa que receba três notas, calcule e mostre a média ponderada entre elas

namespace exercicio3 {
    let nota1: number, nota2: number, nota3: number;

    const peso1: number = 3, peso2: number = 5, peso3: number = 2;

    nota1 = 8, nota2 = 7, nota3 = 4;

    //nota1 = 1, nota2 = 2, nota3 = 3;

    let situacao: boolean = !(nota3 == 0);

    if (situacao && nota2 >= 5) {
        let media: number = ((nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3))
        let nome: string = "Fulano";
        let strAprovado = media >= 7 ? "Aprovado" : media >= 3 ? "de Recuperação" : "Reprovado";

        console.log(`Olá ${nome} a média ponderada dos valores é: ${media.toFixed(2)}. Você está ${strAprovado}`);
    } else {
        console.log('Aluno não entregou o trabalho e sua média foi 0');
    }
}