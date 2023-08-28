/**
 * 2 - Escreva um programa TypeScript que leia uma lista de números 
 * inteiros do usuário e imprima o maior número inserido.
 */

namespace exercicio2 {
    let numList: number[] = [50, 145, 11, 8, 5, 36];

    let numMax: number = Math.max(...numList);

    console.log(`O maior número informado é ${numMax}.`);
}
