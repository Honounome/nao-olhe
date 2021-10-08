### Escreva um método Remover que permita ao usuário informar o valor do elemento que se deseja excluir;

OBSERVAÇÕES:

1. O *for* vai passando pelas posições de **valores** enquanto o *if* vê se aquela posição é igual a **valor** (que foi passado como parâmetro)
2. Se é igual, então o valor que estava nessa posição é substituido por 0 e o *return* é chamado pra encerrar a execução da função
3. Eu sei que essa função é do tipo *void* e que por isso ela não pode retornar nada, mas se vocês olharem direito eu realmente não tô retornando nada. Quando usado dessa forma, o *return* encerra a execução da função mas não retorna nenhum valor.

```java

public void remover(int valor) {
        // OBS 1
        for (int i = 0; i < this.valores.length; i++) {
            // OBS 2
            if (this.valores[i] == valor) {
                this.valores[i] = 0;
                return; // OBS 3
            }
        }
    }

```
