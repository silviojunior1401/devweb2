namespace exercicio09 {
    function fibonacci(num: number): number {
        if(num < 2)
            return num;

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    console.log(fibonacci(18));
}