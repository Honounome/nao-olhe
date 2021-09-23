### Leia uma matriz de 3 x 3 elementos. Calcule a soma dos elementos que estão acima da diagonal principal, calcule a subtração dos elementos que estão abaixo da diagonal principal e calcule a multiplicação dos elementos que estão na diagonal principal

OBSERVAÇÕES:

1. É importante colocar os valores corretos aqui na declaração, 0 para soma e subtração e 1 para multiplicação, se tu colocar 0 para a multiplicação, ela vai ser sempre igual a 0
2. Para acelerar as coisas é só fazer as contas logo depois que o valor é inserido, isso te permite fazer tudo em só 1 *for*
3. Cuidado com todos esses *if* e *else*, foi aqui que eu errei 😟 (não se preocupem, tá certo agora)
4. Equivale a `som = som + qst3[i][j]`
5. Equivale a `sub = sub - qst3[i][j]`
6. Equivale a `mut = mut * qst3[i][j]`

```java
public static void questao3() {
        Scanner scan = new Scanner(System.in);
        int[][] qst3 = new int[3][3];
        int som = 0, sub = 0, mut = 1; // OBS 1
        
        // OBS 2
        System.out.println("Insira o valor para as posições:");
        for(int i = 0; i < qst3.length; i++) {
            for(int j = 0; j < qst3[i].length; j++) {
                System.out.printf("[%d,%d] -> ", i, j);
                qst3[i][j] = scan.nextInt();
                
                // OBS 3
                if(i<j)
                    som += qst3[i][j]; // OBS 4
                else if(i>j)
                    sub -= qst3[i][j]; // OBS 5
                else
                    mut *= qst3[i][j]; // OBS 6
            }
        }
        System.out.printf("Soma: %d%nSubtração: %d%nMultiplicação: %d%n", som, sub, mut);
    }
```
