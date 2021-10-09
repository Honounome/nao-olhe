### Use o conceito de polimorfismo para alterar entrada de valor e posição (parâmetros) do método insereElemento(), de modo que o usuário posso inserir todos os valores de uma única vez e indicar a posição de cada valor na lista nesta mesma chamada do método insereElemento();

OBSERVAÇÕES:

1. Sobre os parâmetros: **vals** é um vetor de *int* e nele vão os números que irão ser inseridos em **valores**, só que dessa vez nós podemos especificar em que posição de **valores** cada número vai entrar, é aí que entra **pos**, outro vetor de *int* que guarda as posições que cada número de **vals** vai ser inserido dentro de **valores**. Como exemplo, digamos que **vals[0]** é igual a 5, e **pos[0]** é igual a 3, isso significa que **valores**, na posição 3, vai receber o número 5: `valores[3] = 5`, ou `valores[pos[0]] = vals[0]`. Dá para fazer pedindo uma matriz como parâmetro ao invés de dois vetores, mas eu acho que do jeito que tá é mais didático
2. Aqui tá `i < pos.length` porque `i < valores.length` dá erro quando **valores** é maior que **vals**/**pos** (na teoria, os dois têm o mesmo tamanho), obrigado Iago por descobrir esse erro
3. Essa linha representa exatamente o que eu expliquei na OBS 1 só que de forma mais geral
4. Não sei o motivo desse return e nem o porquê desse método ser int e não void, eu só repliquei o que o professor fez

```java

public int insereElemento(int[] vals, int[] pos) { // OBS 1
        for (int i = 0; i < pos.length; i++) { // OBS 2
            this.valores[pos[i]] = vals[i]; // OBS 3
        }
        return -1; // OBS 4
    }

```
