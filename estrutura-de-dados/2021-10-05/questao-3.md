### Escreva um método consultaValor que permita ao usuário informar o valor e retornar a posição do elemento;

OBSERVAÇÕES:

1. Bem simples, *for* para percorrer **valores**, *if* para comparar cada posição com **valor**
2. Caso o valor seja encontrado, a posição (ou seja, **i**) é retornada
3. Caso o valor não seja encontrado ainda é obrigatório retornar alguma coisa, eu decidi retornar -1 porque é um número que nunca vai ser retornado pelo outro *return*, já que ele retorna **i**, que é sempre maior ou igual a 0

```java

public int consultarValor(int valor) {
        // OBS 1
        for (int i = 0; i < this.valores.length; i++) {
            if (this.valores[i] == valor) {
                return i; // OBS 2
            }
        }
        return -1; // OBS 3
    }

```
