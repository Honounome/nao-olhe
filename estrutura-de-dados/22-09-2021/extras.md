### Formatador de matriz baseado no maior número

`System.out.printf(String.format("%%%dd", Integer.toString(<variavel>).length()) + " ", <matriz>[i][j])`, assustador né? Em resumo isso faz a minha matriz adaptar o formato da saída com base no tamanho da **\<variavel\>**, eu recomendo que a **\<variavel\>** seja o maior número da matriz, para que fique tudo alinhado

Por exemplo:
    
* Se alguém colocasse números de diferentes tamanhos e eu tivesse colocado um simples `System.out.print(<matriz>[i][j] + " ")` a saída ficaria tipo assim:

  ![uma matriz toda torta porque não foi formatada direito](https://user-images.githubusercontent.com/80454712/134441975-066193f2-bae1-4b3f-8150-5ef11057c677.png)
      
* Todo mundo concorda que aquilo tá horrível né? Mal dá pra saber em que posição da matriz cada número está. Agora, se eu usar `System.out.printf(String.format("%%%dd", Integer.toString(<variavel>).length()) + " ", <matriz>[i][j])` a saída usa o tamanho do maior número inserido para organizar a saída:

  ![uma matriz retinha porque o Wesley ajeitou ela](https://user-images.githubusercontent.com/80454712/134442303-c84502a1-fec5-4821-be00-2a9c33452588.png)   
  Confesso que não é a coisa mais bonita do mundo mas a simples organização já me agrada

* Se eu quiser colocar zeros nos lugares vazios é só usar `System.out.printf(String.format("%%0%dd", Integer.toString(<variavel>).length()) + " ", <matriz>[i][j])`:

  ![uma matriz retinha cheia de zeros, ai meus olhos](https://user-images.githubusercontent.com/80454712/134442622-94730b28-2b7b-41a8-a1d5-1e7efd3d6b1f.png)   
  Não faço isso porque esse tanto de zeros me confunde muito

**Como isso acontece?** Ótima pergunta meu caro, vou tentar explicar, caso tu se perca na explicação a culpa foi minha, não tenho boa didática:

Se você sabe como usar o printf deve saber também que para delimitar quanto espaço uma string vai ocupar é só por um número depois do *%*, a linha `System.out.printf("|%5d|", 23)` por exemplo, gera "|&nbsp; &nbsp;23|" como saída (o 23 ocupando 5 espaços: 2 dele e mais 3 espaços vazios).   

A questão é como fazer esse número variar? Depois de muitos testes consegui chegar àquela linha de código assustadora, o segredo está no `String.format("%%%dd", Integer.toString(<variavel>).length())`, o *String.format()* é um jeito de formatar uma *String* sem ter que usar o *printf*, com esse método eu consigo fazer o número que fica entre o *%* e o *d* mudar, para que o *%* apareça é preciso colocar *%%* na formatação, então eu acrescento o *%d* para representar o número que eu quero que vá no meio e por fim acrescento um *d*, juntando tudo chegamos a *"%%%dd"*.

Isso vai gerar a string *"%{numero}d"*, onde **{numero}** é `Integer.toString(<variavel>).length()` que pode ser traduzido como *tamanho da **\<variavel\>** transformada em String*, isso porque para pegar o tamanho do número ele precisa ser transformado em *String* primeiro, se **\<variavel\>** for *25* então **{numero}** vai ser igual a *2* o que gera a string *"%2d"* e consequentemente formata os números da matriz para ocuparem 2 espaços, já se **\<variavel\>** for *231684665* então **{numero}** vai ser igual a *9* o que gera a string *"%9d"* e consequentemente formata os números da matriz para ocuparem 9 espaços.

### Imprimir matriz sem ter que usar outro *for*

O código para fazer isso segue o seguinte formato:

```java

// essa variável vai receber os valores à medida que eles forem inseridos
String matriz = "";

for(int i = 0; i < matriz.length; i++) {
    for(int j = 0; j < matriz[i].length; j++) {
        // aqui você coloca o código que põe alguma coisa dentro de matriz[i][j]
        
        // e então a matriz recebe ele, você pode formatar do jeito que quiser, esse aqui é o meu jeito
        matriz += String.format("%d ", matriz[i][j];
    }
    // uma quebra de linha para poder mostrar corretamente as 2 dimensões da matriz
    matriz += "\n";
}
// no final é só imprimir o resultado
System.out.print(matriz);
```
