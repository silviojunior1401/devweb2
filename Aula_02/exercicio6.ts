namespace exercicio6 {
    let num1: number = 10, num2: number = 3, num3: number = 38;

    let numList: number[] = [num1, num2, num3];

    numList.sort((a, b) => b - a);

    console.log(`O maior número informado é ${numList[0]}.`);
}