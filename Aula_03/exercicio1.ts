/**
 * 1 - Escreva um programa TypeScript que imprima todos os números 
 *  primos de 1 a 53 usando a função **`while`**.
 */

namespace exercicio1 {
    let num: number = 53;
    let i: number = 2;
    let numPrimos: number[] = [];

    while (i <= num) {
        let aux: number = 1;
        let numP: boolean = true;

        while (aux <= i) {
            if (!(aux == 1 || aux == i) && i % aux == 0) {
                numP = false;
                break;
            }

            aux++;
        }

        if (numP) {
            numPrimos.push(i);
        }

        i++;
    }

    console.log(numPrimos);
}
