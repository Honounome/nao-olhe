### Crie um programa com um vetor de 10 posições. Em seguida, o programa deverá contar e escrever quantos valores pares o vetor possui e imprimir o maior e o menor elemento do vetor.

OBSERVAÇÕES:

1. Atribuir o primeiro elemento do vetor a essas variáveis é uma alternativa mais eficaz do que fazer coisas como *"menor = 10000000000"*
2. O que o *for-each* faz é usar a variável que eu declaro lá dentro (nesse caso, **num**) pra percorrer o vetor (nesse caso, **nums**), então a cada "volta" do *for-each* o **num** vai representar uma posição diferente dentro de **nums**, começando pela posição 0 e indo até o fim do vetor, é como se o **num** substituísse o **nums[i]** que a gente usaria se fosse um *for* comum
3. *O print nosso de cada dia nos dai hoje*

```java
  public static void questao1() {
        double[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        double nPares = 0, menor, maior;

        // OBS 1
        menor = nums[0];
        maior = nums[0];
        
        // OBS 2
        for (double num : nums) {
            if (num % 2 == 0) {
                nPares++;
            }
            if (num > maior) {
                maior = num;
            }
            if (num < menor) {
                menor = num;
            }
        }
        
        // OBS 3
        System.out.printf("nPares: %.0f\nmaior: %.0f\nmenor: %.0f\n", nPares, maior, menor);
    }
``` 
