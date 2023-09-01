namespace exercicio1 {
    const array: number[] = [36, 8, 10, 74, 24];
    let soma: number = 0;

    for (let index = 0; index < array.length; index++) {
        soma += array[index];
    }

    console.log(soma);
}
