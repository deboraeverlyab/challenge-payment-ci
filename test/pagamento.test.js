import assert from 'assert';
import { ServicoDePagamento } from '../src/pagamento.js';

describe('Testando Funções de pagamento.js', () => {

    it('Validar que pagamento com valor acima de 100 recebe categoria cara', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const categoriaEsperada = 'cara';

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, categoriaEsperada);

    });

    it('Validar que pagamento com valor igual a 100 recebe categoria padrão', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const categoriaEsperada = 'padrão';

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'Empresa', 100);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, categoriaEsperada);

    });

    it('Validar que pagamento com valor abaixo de 100 recebe categoria padrão', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const categoriaEsperada = 'padrão';

        // Act
        servicoDePagamento.pagar('4444-5555-6666', 'Empresa', 56.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.categoria, categoriaEsperada);

    });

    it('Validar que consultarUltimoPagamento retorna apenas o último pagamento após múltiplos pagamentos', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarrasEsperado = '9999-8888-7777';

        // Act
        servicoDePagamento.pagar('1111-1111-1111', 'Empresa A', 50);
        servicoDePagamento.pagar('2222-2222-2222', 'Empresa B', 75);
        servicoDePagamento.pagar(codigoBarrasEsperado, 'Empresa C', 200);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, codigoBarrasEsperado);

    });

    it('Validar que o objeto de pagamento retornado possui as propriedades codigoBarras, empresa, valor e categoria', function () {

        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.ok(Object.prototype.hasOwnProperty.call(ultimoPagamento, 'codigoBarras'));
        assert.ok(Object.prototype.hasOwnProperty.call(ultimoPagamento, 'empresa'));
        assert.ok(Object.prototype.hasOwnProperty.call(ultimoPagamento, 'valor'));
        assert.ok(Object.prototype.hasOwnProperty.call(ultimoPagamento, 'categoria'));

    });

});
