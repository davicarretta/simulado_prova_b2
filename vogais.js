function contarVogais(string) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let quantidadeVogais = 0;
  
    for (let i = 0; i < string.length; i++) {
      const caractere = string[i].toLowerCase();
  
      if (vogais.includes(caractere)) {
        quantidadeVogais++;
      }
    }
  
    return quantidadeVogais;
  }
  
  // Solicitar ao usuário que insira a string
  const string = prompt("Digite uma string:");
  
  // Contar a quantidade de vogais
  const quantidadeVogais = contarVogais(string);
  
  // Exibir a quantidade de vogais no console
  console.log("A string contém " + quantidadeVogais + " vogais.");