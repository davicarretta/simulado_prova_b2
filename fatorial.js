function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Solicitar ao usuário que insira o número usando uma caixa de alerta
  const numero = parseInt(prompt("Digite um número:"));
  
  // Calcular o fatorial
  const fatorial = calcularFatorial(numero);
  
  // Exibir o fatorial usando uma caixa de alerta
  alert("O fatorial de " + numero + " é: " + fatorial);