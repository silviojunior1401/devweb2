// Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um aumento de 25%.

namespace exercicio4 {
    let salario: number = 2500;

    let novoSalario: number = salario * 1.25;

    console.log(`O novo salário com aumento de 25% é de R$ ${novoSalario.toFixed(2)}`);
}