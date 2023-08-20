namespace exercicio2 {
    let tralab: number = 6, avasem: number = 8, exafim: number = 6;

    let pestra: number = 2, pesava: number = 3, pesexa: number = 5;

    let media: number = (tralab * pestra + avasem * pesava + exafim * pesexa) / (pestra + pesava + pesexa);

    let conceito: string;

    conceito = media >= 8 ? 'A' : media >= 7 ? 'B' : media >= 6 ? 'C' : media >= 5 ? 'D' : 'E';

    console.log(`A média ponderada é igual a ${media}, se encaixando no conceito ${conceito}`);

}