namespace exercicio7 {
    let mes: number = 10

    let mesExt: string = new Date(`1901-${mes}-10`).toLocaleString('default', { month: 'long' });

    console.log(mesExt);
}