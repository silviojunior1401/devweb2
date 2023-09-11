namespace exercicio10 {
    function ordenaCrescente(lista: number[]): number[] {
        return lista.sort((a, b) => a - b);
    }

    let num: number[] = [65, 23, 41, 2, 36, 77, 10, 22, 58, 31];

    console.log(ordenaCrescente(num));
}
