namespace exercicio5 {
    let horaAtual: number = new Date().getHours();

    //let horaAtual: number = 22;

    let nome: string = "Silvio";

    let saudacao: string = horaAtual >= 18 ? "Bom noite" : 
        horaAtual >= 12 ? "Boa tarde" : horaAtual >= 6 ? "Boa dia" : "Boa madrugada"

    console.log(`${saudacao} ${nome}!`);
}