### Lista.java

```java

package lista;

public class Lista {

    public static void main(String[] args) {
        ListaExemplo listaSimples = new ListaExemplo(5);
        
        listaSimples.insereElemento(1);
        listaSimples.insereElemento(2);
        listaSimples.insereElemento(3);
        listaSimples.insereElemento(4);
        listaSimples.insereElemento(5);
        
        System.out.println("\nTeste para a 1ª questão:");
        listaSimples.removeElemento(2);
        listaSimples.insereElemento(10);
        listaSimples.consultaElemento();
        
        System.out.println("\nTeste para a 2ª questão:");
        listaSimples.remover(10);
        listaSimples.consultaElemento();
        
        System.out.println("\nTeste para a 3ª questão:");
        System.out.println("O valor 4 está na posição: "
                + listaSimples.consultarValor(4));
        listaSimples.consultaElemento();
        
        System.out.println("\nTeste para a 4ª questão:");
        listaSimples.removeElemento(0);
        listaSimples.removeElemento(4);
        listaSimples.insereElemento(new int[]{10, 9, 8});
        listaSimples.consultaElemento();
        
        System.out.println("\nTeste para a 5ª questão:");
        listaSimples.insereElemento(new int[]{1, 3, 5}, new int[]{0, 2, 4});
        listaSimples.consultaElemento();
    }
    
}

```

### JavaExemplo.java

| [questao-1](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-10-05/questao-1.md) | [questao-2](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-10-05/questao-2.md) | [questao-3](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-10-05/questao-3.md) | [questao-4](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-10-05/questao-4.md) | [questao-5](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-10-05/questao-5.md) |
| --- | --- | --- | --- | --- |

```java

package lista;

public class ListaExemplo {

    private int[] valores;
    private int tamanho;

    public ListaExemplo(int tam) {
        if (tam > 0) {
            this.tamanho = tam;
            this.valores = new int[tam];
        }
    }

    public int removeElemento(int pos) {
        int valor = -1;
        if (pos >= 0 && pos < this.valores.length) {
            valor = this.valores[pos];
            this.valores[pos] = 0;
        }
        return valor;
    }

    public void consultaElemento(int pos) {
        if (pos >= 0 && pos < this.valores.length) {
            System.out.println("O valor da posição [" + pos + "] é "
                    + this.valores[pos]);
        } else {
            System.out.println("Esta posição [" + pos + "] "
                    + "não foi encontrada.\nO número total de posições é "
                    + (this.valores.length - 1));
        }
    }

    public void consultaElemento() {
        for (int i = 0; i < this.valores.length; i++) {
            System.out.println("O valor da posição [" + i + "] é "
                    + this.valores[i]);
        }
    }

    public int insereElemento(int valor) {/* questao-1 */}

    public void remover(int valor) {/* questao-2 */}

    public int consultarValor(int valor) {/* questao-3 */}
    
    public int insereElemento(int[] valores) {/* questao-4 */}
    
    public int insereElemento(int[] valores, int[] pos) {/* questao-5 */}

}

```
