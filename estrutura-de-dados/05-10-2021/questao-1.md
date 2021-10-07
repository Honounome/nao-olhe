### Considerando a primeira implementação, lista simples, reescreva o método insereElemento() de forma que possamos inserir elementos na primeira posição vazia da lista encontrada;

OBSERVAÇÕES:

1. O *for* vai percorrer o vetor **valores** usando o *if* para procurar uma posição vazia (uma posição que tenha o valor 0), se ele encontrar, essa posição recebe **valor** (o parâmetro), por fim o *break* faz com que o *for* pare (a gente precisa fazer isso porque nós queremos colocar **valor** só na primeira posição vazia do vetor, e não em todas as posições vazias dele)
2. Não sei o motivo desse *return* e nem o porquê desse método ser *int* e não *void*, eu só repliquei o que o professor fez 

```java

public int insereElemento(int valor) {
        // OBS 1
        for (int i = 0; i < this.valores.length; i++) {
            if (this.valores[i] == 0) {
                this.valores[i] = valor;
                break;
            }
        }
        
        // OBS 2
        return -1;
    }

```
