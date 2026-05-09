import assert from 'assert';
import { fazerLogin } from '../src/login.js';

describe('Testando Funções de login.js', () => {

    it('Validar que ao informar email e senha corretos o login é realizado com sucesso', function () {

        // Arrange
        const email = 'joao@email.com';
        const senha = '123456';
        const retornoEsperado = 'Login realizado com sucesso';

        // Act 
        const retornoDaFuncao = fazerLogin(email, senha);

        // Assert 
        assert.equal(retornoDaFuncao, retornoEsperado);

    });

    it('Validar que ao utilizar uma credencial expirada a função retorna mensagem de renovação', function () {

        // Arrange
        const email = 'maria@email.com';
        const senha = 'abcdef';
        const retornoEsperado = 'Renove suas credenciais';

        // Act
        const retornoDaFuncao = fazerLogin(email, senha);

        // Assert
        assert.equal(retornoDaFuncao, retornoEsperado);

    });

    it('Validar que ao informar um email inexistente a função retorna usuário não encontrado', function () {

        // Arrange
        const email = 'naoexiste@email.com';
        const senha = '123456';
        const retornoEsperado = 'Usuário não encontrado';

        // Act
        const retornoDaFuncao = fazerLogin(email, senha);

        // Assert
        assert.equal(retornoDaFuncao, retornoEsperado);

    });

    it('Validar que ao informar senha incorreta a função retorna mensagem de erro', function () {

        // Arrange
        const email = 'joao@email.com';
        const senha = 'senhaErrada';
        const retornoEsperado = 'Senha incorreta';

        // Act
        const retornoDaFuncao = fazerLogin(email, senha);

        // Assert
        assert.equal(retornoDaFuncao, retornoEsperado);

    });

});