namespace exercicio06 {
    function calcFatorial(fatorial: number): number {
        let controle: number = fatorial;
        let result: number = 1;

        while (controle != 0) {
            result *= controle;
            controle--;
        }

        return result;
    }

    console.log(calcFatorial(5));
}
