namespace exercicio5 {
    let horaAtual: number = new Date().getHours();

    let nome: string = "Silvio";

    let saudacao: string = horaAtual >= 18 ? "Boa noite" : 
        horaAtual >= 12 ? "Boa tarde" : horaAtual >= 6 ? "Bom dia" : "Boa madrugada"

    console.log(`${saudacao} ${nome}!`);
}