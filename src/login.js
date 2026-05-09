const usuarios = [
  {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    senha: "123456",
    expirado: false
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@email.com",
    senha: "abcdef",
    expirado: true
  }
];

// Função responsável por realizar o login de um usuário com base no email e senha fornecidos
export function fazerLogin(email, senha) {

  // Percorre todos os usuários do vetor usuarios para encontrar o email informado
  for (let usuario of usuarios) {

    // Verifica se o email informado corresponde ao email do usuário atual
    if (usuario.email === email) {

      // Verifica se a senha informada corresponde à senha do usuário atual
      if (usuario.senha !== senha) {
        return 'Senha incorreta';
      }

      // Verifica se a credencial expirou do usuário atual
      if (usuario.expirado === true) {
        return 'Renove suas credenciais';
      }

      // Caso todas as validações estejam corretas, realiza o login com sucesso
      return 'Login realizado com sucesso';
    }
  }

  // Caso o email não seja encontrado em nenhum usuário do vetor, retorna a mensagem de usuário não encontrado
  return 'Usuário não encontrado';
}