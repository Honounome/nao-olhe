### Faça um programa que leia um vetor de 5 posições para números reais e, depois, um código inteiro. Se o código for zero, finalize o programa; se for 1, mostre o vetor na ordem direta; se for 2, mostre o vetor na ordem inversa. Caso, o código for diferente de 0, 1 e 2 escreva uma mensagem informando que o código é inválido.
OBSERVAÇÕES:
1. Requer um ```import java.util.Scanner;```
2. Me desculpem por usar uma estrutura que a gente nunca viu mas o NetBeans me recomendou e eu achei ótimo, nem eu sei como usar certinho ainda, mas vocês podem fazer o *switch* normal, dá no mesmo, só não esqueçam de colocar os *break*
3. Prestem bastante atenção a esse *for*, ele serve pra mostrar o conteúdo de um vetor de forma invertida, analisem ele e tentem entender como funciona
```java
public static void questao3() {
        double[] notas = new double[5];
        Scanner scan = new Scanner(System.in); // OBS 1
        int cod;

        for (int i = 0; i < notas.length; i++) {
            System.out.printf("%dª nota: ", i + 1);
            notas[i] = scan.nextDouble();
        }

        System.out.print("Código: ");
        cod = scan.nextInt();

        // OBS 2
        switch (cod) {
            case 0 -> {}
            case 1 -> {
                System.out.print("Vetor em ordem normal:");
                for (double nota : notas)
                    System.out.printf(" %.2f", nota);
            }
            case 2 -> {
                System.out.print("Vetor em ordem inversa:");
                for (int i = notas.length - 1; i >= 0; i--) // OBS 3
                    System.out.printf(" %.2f", notas[i]);
            }
            default -> System.out.println("Código Inválido");
        }
    }
```
