### Gerar e imprimir uma matriz de tamanho 10 x 10, onde seus elemento são da forma:
* ### A\[i][j] = 2i + 7j - 2 se i < j; A\[i][j] = 3i<sup>2</sup> - 1 se i = j; A\[i][j] = 4i<sup>3</sup> - 5j<sup>2</sup> + 1 se i > j;

OBSERVAÇÕES:

1. Essa questão é bem direta e simples de fazer, não tem muito o que comentar. Mas se vocês quiserem saber como eu imprimi a matriz sem ter que usar outro *for* podem clicar [aqui](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/22-09-2021/extras.md#imprimir-matriz-sem-ter-que-usar-outro-for)

```java
public static void questao2() {
        int[][] qst2 = new int[10][10];
        String matriz = "";
        
        for(int i = 0; i < qst2.length; i++) {
            for(int j = 0; j < qst2[i].length; j++) {
                if(i<j)
                    qst2[i][j] = 2*i + 7*j - 2;
                else if(i==j)
                    qst2[i][j] = 3*i*i - 1;
                else
                    qst2[i][j] = 4*i*i*i - 5*j*j + 1;
                matriz += String.format("%4d ", qst2[i][j]);
            }
            matriz += "\n";
        }
        System.out.print(matriz);
    }
```
