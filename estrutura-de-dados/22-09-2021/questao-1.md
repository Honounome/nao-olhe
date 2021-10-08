### Leia uma matriz 4 x 4 e um valor *"X"*. O programa deverá fazer a busca do valor "X" digitado na matriz e, em seguida, imprima a matriz, retornando a localização (linha e coluna) do maior valor e a localização (linha e coluna) do valor "X" digitado ou uma mensagem "Valor "X" não encontrado na matriz!" (exemplo: Valor 12 não encontrado na matriz!).

OBSERVAÇÕES:

1. Nesse for eu faço duas coisas, peço para o usuário preencher a matriz e vou logo comparando os valores para ver qual é o maior, percebam que o primeiro *if* faz obriga a variável **maior** a receber o primeiro valor inserido e o outro *if* faz a comparação à medida que os valores vão sendo inseridos
2. Aprenda a usar o *printf* imediatamente 😠. Eu sei que parece difícil, mas realmente não é, se vcs dedicarem 30 minutos estudando e testando no NetBeans já dá pra pegar o jeito, não tentem aprender tudo, se vcs aprenderem *%s*, *%c*, *%d* e *%f* já é um ótimo começo, depois vocês podem começar a aprender as coisas que realmente embelezam a saída
3. Esse *for* serve para imprimir a matriz, a explicação de como essa linha de código funciona não é extremamente relevante, mas se vocês quiserem saber é só clicar [aqui](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/22-09-2021/extras.md#formatador-de-matriz-baseado-no-maior-número)
4. Isso aqui é bacana, por que diabos tem um *return* aqui se o método *questao1()* é *void*? Pois é, dá pra fazer isso, nesses casos o *return* vai fazer a execução sair do método, de forma que qualquer ação depois do *return* não vai ser executada. E essa característica do *return* é o que me permitiu mostrar a mensagem de "Valor "X" não encontrado na matriz!" com facilidade, porque se o programa entrar na condição do *if* lá dentro, não importa quantos *print* eu colocar depois, eles não vão aparecer, já caso o programa não entrar no *if* quer dize que o valor não foi encontrado e a execução pode caminhar tranquilamente até aquele último *printf*

```java
public static void questao1() {
        Scanner scan = new Scanner(System.in);
        int[][] qst1 = new int[4][4];
        int num, maior = 0;
        
        // OBS 1
        System.out.println("Insira o valor para as posições:");
        for(int i = 0; i < qst1.length; i++) {
            for(int j = 0; j < qst1[i].length; j++) {
                if(i==0 && j==0)
                    maior = qst1[i][j];
                System.out.printf("[%d,%d] -> ", i, j); // OBS 2
                qst1[i][j] = scan.nextInt();
                if(qst1[i][j] > maior)
                    maior = qst1[i][j];
            }
        }
        
        System.out.println("Qual numero você quer encontrar na matriz?");
        num = scan.nextInt();
        
        // OBS 3
        for(int i=0; i<qst1.length; i++) {
            for(int j=0; j<qst1[i].length; j++) {
                System.out.printf(String.format("%%%dd", Integer.toString(maior).length()) + " ", qst1[i][j]);
            }
            System.out.println();
        }
        
        System.out.println("\nO maior elemento da matriz é " + maior);
        for(int i=0; i<qst1.length; i++) {
            for(int j=0; j<qst1[i].length; j++) {
                if(num==qst1[i][j]) {
                    System.out.printf("O valor %d está na posição [%d, %d]%n", num, i, j);
                    return; // OBS 4
                }
            }
        }
        System.out.printf("Valor %d não encontrado na matriz!%n", num);
    }
```
