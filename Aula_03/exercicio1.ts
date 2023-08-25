namespace exercicio1 {
    let num: number = 53;
    let i: number = 1;
    let numPrimos: number[] = [];

    while (i <= num) {
        let j: number = 0;
        let numP: boolean = true;

        while (j <= i) {
            if (j == 1 || j == i) {
                j++;
                continue;
            }

            if (i % j == 0) {
                numP = false;
                break;
            }

            j++;
        }

        if (numP && i !== 1) {
            numPrimos.push(i);
        }

        i++;
    }

    console.log(numPrimos);
}
