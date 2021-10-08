### Use o conceito de polimorfismo para alterar entrada de valor (parâmetro) do método insereElemento(), de modo que o usuário posso inserir todos os valores de uma única vez, ou seja, chamando uma única vez o método insereElemento() para inserir todos os valores correspondente ao número total de posições da lista. Considere que os valores serão alocados conforme as posições vazias disponíveis;

OBSERVAÇÕES

1. Esse contador é importante para que a passagem do conteúdo de **vals** para **valores** não dê problema, ele serve para registrar quantos números já de **vals** já foram passados para **valores**
2. Eu adicionei esse `&& cont < vals.length` na parte da condição do *for* para proteger o programa de um erro que acontece quando tem mais espaços vazios em **valores** do que números que **vals** pode ofertar
3. Notem que eu usei **cont** com um *++*, para que na próxima vez que **valores** for receber um valor de **vals**, **vals** envie o valor que está na próxima posição dele
4. Não sei o motivo desse *return* e nem o porquê desse método ser *int* e não *void*, eu só repliquei o que o professor fez

```java

public int insereElemento(int[] vals) {
        int cont = 0; // OBS 1
        
        for (int i = 0; i < this.valores.length && cont < vals.length; i++) { // OBS 2
            if (this.valores[i] == 0) {
                this.valores[i] = vals[cont++]; // OBS 3
            }
        }
        return -1; // OBS 4
    }

```
