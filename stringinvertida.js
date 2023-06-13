function inverterString(string) {
    let suaString = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      suaString += string[i];
    }
  
    return novaString;
  }
  
  // Solicitar ao usuário que insira a string
  const stringOriginal = prompt("Digite uma string:");
  
  // Inverter a string
  const stringInvertida = inverterString(stringOriginal);
  
  // Imprimir a string invertida no console
  console.log(stringInvertida);