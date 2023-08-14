// Faça um programa que receba três notas, calcule e mostre a média aritmédica entre elas

namespace exercicio2 {
    let nota1: number, nota2: number, nota3: number;

    nota1 = 6.1, nota2 = 5.3, nota3 = 9.6;

    //nota1 = 1, nota2 = 2, nota3 = 3;

    var nome: string = "Fulano";

    const media: number = (nota1 + nota2 + nota3) / 3;

    let strAprovado = media >= 7 ? "Aprovado" : media >= 3 ? "de Recuperação" : "Reprovado";

    console.log(`Olá ${nome} a média aritmética dos valores é: ${media.toFixed(2)}. Você está ${strAprovado}`);
}