
namespace exercicio3 {
    let num1: number = 5, num2: number = 7, num3: number = 9, num4: number = 6;

    let numList: number[] = [num1, num2, num3];
    let numListComp: number[] = [num1, num2, num3];

    numList.sort((a, b) => a - b);

    if (numList.every((num, i) => num === numListComp[i])) {
        numList.push(num4);

        numList.sort((a, b) => b - a);

        console.log(numList);
    } else {
        console.log('Os 3 primeiros números não estão em ordem crescente');
    }
}