### Faça um programa para ler a nota da prova de 5 alunos e armazene num vetor, calcule e imprima a média geral.
OBSERVAÇÕES:
1. Requer um ```import java.util.Scanner;```
2. Eu criei uma variável **soma** ao invés de uma **media** porque essa minha variável nunca recebe a média de nada, ela serve pra somar todos os valores do vetor, a média é calculada dentro do *print* lá no final do código
3. Eu poderia ter colocado ```i < 5``` mas ```i < notas.length``` permite que o *for* continue funcionando mesmo se eu alterar o tamanho do vetor **notas**
4. Se vocês ainda não aprenderam a usar o *printf* eu recomendo fortemente que estudem ele
```java
public static void questao2() {
        double[] notas = new double[5];
        Scanner scan = new Scanner(System.in); // OBS 1
        double soma = 0; // OBS 2

        // OBS 3
        for (int i = 0; i < notas.length; i++) {
            System.out.printf("%dª nota: ", i + 1);
            notas[i] = scan.nextDouble();
            soma += notas[i];
        }

        // OBS 4
        System.out.printf("Média Geral: %.2f\n", soma / notas.length);
    }
```
