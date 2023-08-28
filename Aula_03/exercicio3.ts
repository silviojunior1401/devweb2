/**
 * 3 - Escreva um programa TypeScript que leia um número inteiro do usuário e imprima 
 *  todos os números de 1 a esse número que são divisíveis por 3.
 */

namespace exercicio3 {
    let numMax: number = 30;
    let nums: number[] = [];

    for (let i = 1; i <= numMax; i++) {
        if (i % 3 == 0) {
            nums.push(i);
        }
    }

    console.log(nums);
}
