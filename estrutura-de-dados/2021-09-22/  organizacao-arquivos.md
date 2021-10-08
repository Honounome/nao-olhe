### Matriz.java

```java

package matriz;
import java.util.Scanner;

public class Matriz {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int questao;
        
        System.out.print("Insira o número da questão [1-3]: ");
        questao = scan.nextInt();
        switch(questao){
            case 1 -> MatrizExemplo.questao1();
            case 2 -> MatrizExemplo.questao2();
            case 3 -> MatrizExemplo.questao3();
            default -> System.out.println("Questão não existente");
        }
    }
    
}

```

### MatrizExemplo.java

|[questao-1](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-22/questao-1.md)|[questao-2](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-22/questao-2.md)|[questao-3](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-22/questao-3.md)|
| --- | --- | --- |

```java

package matriz;
import java.util.Scanner;

public class MatrizExemplo {

    private double[][] notas = {{9.9, 5.9, 9.0}, {6.0, 4.9}};

    public double[][] getNotas() {
        return notas;
    }

    public void setNotas(double[][] notas) {
        this.notas = notas;
    }
    
    public void percorrerMatriz() {
        for(int i = 0; i < notas.length; i++) {
            for(int j = 0; j < notas[i].length; j++)
                System.out.printf("%d:%d = %.1f%n", i, j, notas[i][j]);
        }
    }
    
    public void percorrerMatriz(double valor) {
        for(int i = 0; i < notas.length; i++) {
            for(int j = 0; j < notas[i].length; j++)
                if(notas[i][j] == valor)
                    System.out.printf("A nota %.1f está na posicao (%d, %d)", notas[i][j], i, j);
        }
    }
    
    public static void questao1() {/* questao-1 */}
    
    public static void questao2() {/* questao-2 */}
    
    public static void questao3() {/* questao-3 */}
    
}

```
