namespace exercicio4 {
    try {
        let num: number = 3;

        if (!Number.isInteger(num)) {
           throw new Error(`O número informado é ${num} e ele não é inteiro`);
        }
    
        let verificacao: string = num % 2 == 0 ? 'Par' : 'Impar';
    
        console.log(`O número informado é ${num} e ele é ${verificacao}`);
    } catch (err: any) {
        console.log(err.message);
    }
}