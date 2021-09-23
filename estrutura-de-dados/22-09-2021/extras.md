### Formatador de matriz baseado no maior número

`System.out.printf(String.format("%%%dd", Integer.toString(maior).length()) + " ", qst1[i][j])`, assustador né? Em resumo isso faz a minha matriz adaptar o formato da saída com base no maior numero da matriz para que fique tudo alinhado.

Por exemplo:
    
* Se alguém colocasse números de diferentes tamanhos e eu tivesse colocado um simples `System.out.print(qst[i][j] + " ")` a saída ficaria tipo assim:

  ![image](https://user-images.githubusercontent.com/80454712/134441975-066193f2-bae1-4b3f-8150-5ef11057c677.png)
      
* Todo mundo concorda que aquilo tá horrível né? Mal dá pra saber em que posição da matriz cada número está. Agora, se eu usar `System.out.printf(String.format("%%%dd", Integer.toString(maior).length()) + " ", qst1[i][j])` a saída usa o tamanho do maior número inserido para organizar a saída:

  ![grgergerger](https://user-images.githubusercontent.com/80454712/134442303-c84502a1-fec5-4821-be00-2a9c33452588.png)   
  Confesso que não é a coisa mais bonita do mundo mas a simples organização já me agrada

* Se eu quiser colocar zeros nos lugares vazios é só usar `System.out.printf(String.format("%%0%dd", Integer.toString(maior).length()) + " ", qst1[i][j])`:

  ![image](https://user-images.githubusercontent.com/80454712/134442622-94730b28-2b7b-41a8-a1d5-1e7efd3d6b1f.png)   
  Não faço isso porque esse tanto de zeros me confunde muito

**Como isso acontece?** Ótima pergunta meu caro, vou tentar explicar, caso tu se perca na explicação a culpa foi minha, não tenho boa didática:

Se você sabe como usar o printf deve saber também que para delimitar quanto espaço uma string vai ocupar é só por um número depois do *%*, a linha `System.out.printf("|%5d|", 23)` por exemplo, gera "|&nbsp; &nbsp;23|" como saída (o 23 ocupando 5 espaços: 2 dele e mais 3 espaços vazios).   

A questão é como fazer esse número variar? Depois de muitos testes consegui chegar àquela linha de código assustadora, o segredo está no `String.format("%%%dd", Integer.toString(maior).length())`, o *String.format()* é um jeito de formatar uma *String* sem ter que usar o *printf*, com esse método eu consigo fazer o número que fica entre o *%* e o *d* mudar, para que o *%* apareça é preciso colocar *%%* na formatação, então eu acrescento o *%d* para representar o número que eu quero que vá no meio e por fim acrescento um *d*, juntando tudo chegamos a *"%%%dd"*, o número que vai substituir o %d é `Integer.toString(maior).length()` que pode ser traduzido para *tamanho da variável **maior** transformada em String*, isso porque para pegar o tamanho do número ele precisa ser transformado em *String* primeiro.   

E é basicamente isso, mudando o número que vai ali no meio baseado no maior número da matriz faz com que fique tudo organizadinho.
