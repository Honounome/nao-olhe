### Escreva um programa que leia números inteiros aleatórios (utilizando a Classe Random). no intervalo de 0 a 50. e os armazene em um vetor com 10 posições. Preencha um segundo vetor apenas com os números ímpares do primeiro vetor (o tamanho deste vetor deve ser igual a quantidade de números ímpares encontrado). Imprima os dois vetores, sendo que o primeiro vetor deverá ser impresso um elemento por linha, enquanto que o segundo vetor deverá ser impresso conforme o exemplo:   vetorB[3] = {1,7, 3}.
OBSERVAÇÕES:
1. Como toda questão, para responder vocês precisam ter entendido o comando, e esse comando é particularmente confuso, então eu sugiro que leiam ele várias vezes até entender, podem até rodar meu código pra entender como que o professor quer a saída. O comando pede dois vetores, o primeiro de tamanho 10 alimentado por valores aleatórios e o segundo alimentado pelos números ímpares do primeiro vetor, ele também dá instruções específicas sobre como cada vetor deve ser impresso
2. Quando nós criamos um vetor, definimos o tamanho dele. Mas e se nós não soubermos o tamanho dele? É só não criar ainda, podemos criar o vetor mais pra frente no código quando nós soubermos qual o tamanho que ele deve ter. E é pra isso que serve a variável **nImpar**, ela vai contar quantos números ímpares tem o primeiro vetor
3. Aqui o primeiro vetor (**nums**) é alimentado de forma aleatória e toda vez que ele recebe um novo valor, o *if* imediatamente checa se é ímpar
4. Agora que já sabemos quantos números ímpares tem em **nums**, podemos criar o segundo vetor (**impares**). Por meio de uma gambiarra que eu inventei, esse *for* coloca somente os valores ímpares dentro de **impares**
5. **LEIA SÓ SE VC QUER SABER COMO FUNCIONA:** O *for* percorre todo o vetor **nums** pra checar em cada posição se é ímpar, se for, coloca dentro de **impares**, o problema é como colocar os valores na ordem certa (na posição 0, depois na 1, 2, e assim por diante), nós não podemos usar o *i* do *for* por causa da diferença de tamanho entre os vetores (tem só uns 0,08% de chance de eles terem o mesmo tamanho), então eu usei um contador externo (**cont**) pra aumentar em 1 a cada vez que **impares** recebesse um valor, de forma a preencher **impares** perfeitamente. Eu poderia ter usado o **nImpar** no lugar de **cont** mas aí seria mais difícil de explicar
6. Esse for imprime cada valor de **nums** em uma linha
7. Esse for coloca os valores de **impares** no formato ```vetorB[<tamanho do vetor>] = {<valores do vetor separados por vírgula>}```
```java
public static void questao4() {
        // OBS 1
        int[] nums = new int[10];
        int nImpar = 0; // OBS 2
        int cont = 0;
        
        // OBS 3
        for (int i = 0; i < 10; i++) {
            nums[i] = (int) (Math.random() * 51);
            if (nums[i] % 2 == 1) {
                nImpar++;
            }
        }
        
        // OBS 4
        int[] impares = new int[nImpar];
        for (int i = 0; i < 10; i++) { // OBS 5
            if (nums[i] % 2 == 1) {
                impares[cont] = nums[i];
                cont++;
            }
        }
        
        // OBS 6
        for (int i = 0; i < 10; i++)
            System.out.printf("vetorA[%d]: %d\n", i, nums[i]);
            
        // OBS 7
        System.out.printf("\nvetorB[%d] = {%d", nImpar, impares[0]);
        for (int i = 1; i < nImpar; i++)
            System.out.print(", " + impares[i]);
        System.out.print("}");
    }
```
