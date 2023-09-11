namespace exercicio03 {
    let soma: number = 0;

    for (let num = 1; num <= 100; num++) {
        if (num % 2 == 0) {
            soma += num;
        }
    }

    console.log(`A soma dos números pares é ${soma}`);
}
