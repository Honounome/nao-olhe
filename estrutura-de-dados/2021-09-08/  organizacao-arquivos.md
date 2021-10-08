### Vetor.java

```java

package vetor;
import java.util.Scanner;

public class Vetor {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int questao;
        
        System.out.print("Insira o número da questão [1-4]: ");
        questao = scan.nextInt();
        switch(questao){
            case 1 -> VetorExemplo.questao1();
            case 2 -> VetorExemplo.questao2();
            case 3 -> VetorExemplo.questao3();
            case 4 -> VetorExemplo.questao4();
            default -> System.out.println("Questão não existente");
        }
    }
    
}

```

### VetorExemplo.java

|[questao-1](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-08/questao-1.md)|[questao-2](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-08/questao-2.md)|[questao-3](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-08/questao-3.md)|[questao-4](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-08/questao-4.md)|
| --- | --- | --- | --- |

```java

package vetor;
import java.util.Scanner;

public class VetorExemplo {

    public static void questao1() {/* questao-1 */}

    public static void questao2() {/* questao-2 */}

    public static void questao3() {/* questao-3 */}

    public static void questao4() {/* questao-4 */}

}

```
