namespace exercicio04 {
    let notas: number[] = [5, 6, 5, 8, 10, 9, 7, 6, 4, 2, 4, 6];

    let soma: number = 0;

    notas.forEach((nota) => {
        soma += nota;
    });

    const media: number = soma / notas.length;

    console.log(`A média das notas é ${media}`);
}
