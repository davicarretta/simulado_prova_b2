function criarSenha(senha) {
    // Verifica o comprimento da senha, se for menor que 8 não aceita
    if (senha.length < 8) {
      return false;
    }
  
    // Verifica se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    const umaMaiuscula = /[A-Z]/.test(senha);
    const umaMinuscula = /[a-z]/.test(senha);
    const umNumero = /[0-9]/.test(senha);
  
    return umaMaiuscula && umaMinuscula && umNumero;
  }

  //Exemplos de uso:
  console.log(criarSenha("Davi123"));
  console.log(criarSenha("Vasco123"));