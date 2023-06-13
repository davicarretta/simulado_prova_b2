function verificarPrimo(numero) {
    // Função que não aceita números iguais ou menores que 1 (não é primo)
    if (numero <= 1) {
      return false;
    }
  
    // Função para dividir o número desde o 2 até sua raiz quadrada para encontrar possíveis divisores
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        // Se o número for divisível por algum outro número além de 1 e ele mesmo,não é primo
        return false;
      }
    }
  
    // Se não foi possível encontrar nenhum outro divisor, é primo
    return true;
  }


