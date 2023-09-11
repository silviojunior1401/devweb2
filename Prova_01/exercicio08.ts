namespace exercicio08 {
    function calculadora(
        operacao: string,
        num1: number = 0,
        num2: number = 0
    ): number {
        switch (operacao) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                if (num2 === 0) {
                    console.log("Não é possível realizar divisão por 0");
                    return 0;
                }
                return num1 / num2;
            default:
                return 0;
        }
        return 0;
    }

    console.log(calculadora("+", 10, 5));
    console.log(calculadora("+"));
    console.log(calculadora("-", 10, 5));
    console.log(calculadora("-", 10));
    console.log(calculadora("*", 10, 5));
    console.log(calculadora("*", 10));
    console.log(calculadora("/", 10, 5));
    console.log(calculadora("/", 10));
}
