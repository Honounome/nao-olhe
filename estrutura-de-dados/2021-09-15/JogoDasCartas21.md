### Crie um jogo de 21 para duas pessoas (acho q é esse o comando)

OBSERVAÇÕES:

1. Não tem como vocês usarem meu código diretamente porque ainda precisariam copiar exatamente o meu design e também porque o netbeans não deixa deletar algumas coisas (todo o código gerado automaticamente) quando tu tá fazendo um *jForm*, ao invés de copiar busquem entender a lógica do meu programa para que vocês possam adaptar ao programa de vocês
2. Esse é o construtor da classe, ele é chamado assim que o nosso programa inicia, podemos usar ele para fazer algumas configurações que só são necessárias quando o programa é iniciado, no meu caso essas configurações foram:
    * ```initComponents()```: gerado pelo NetBeans e é responsável por traduzir tudo o que a gente faz na aba *design* em código de verdade
    * ```setResizable(false)```: fixa o tamanho da janela do meu programa, o que me permite ter mais controle sobre o design dele
    * ```painel.setOpaque(false)```: torna o objeto **painel** transparente, fiz isso para que a minha imagem de fundo pudesse aparecer
    * ```imgCarta(background, "background", "2")```: define a imagem **background (2)** como ícone do objeto **background**
    * ```iniciar()```: método que eu mesmo criei, com algumas configurações adicionais. Eu separei essas configurações em um método porque elas são úteis para quando eu quiser reiniciar o programa, ou seja, configurações que não são necessárias só quando o programa é iniciado
3. Código gerado automaticamente, aqui o NetBeans transforma o que tu fez na aba *design* em código de verdade
4. Métodos de eventos dos botões de sacar, finalizar, pra controlar a caixa de texto (eu limitei o número de caracteres para ser no máximo 10) e pra reiniciar o jogo (percebam que no método do botão **reiniciar** eu chamo o método *iniciar()*)
5. Esse método serve para resetar as coisas que são alteradas ao longo do jogo, como o valor das mãos e a pontuação
6. Esse método é chamado quando qualquer um dos botões *Sacar* são clicados, "Mas como ele vai saber de qual jogador é o botão?" você me pergunta; "Pelos parâmetros" - eu respondo. Se tu se sente mais confortável em fazer um método diferente para cada botão, pode fazer, não tem problema em um projeto pequeno como esse
7. Qualquer carta maior que 10 dá 10 pontos também
8. Aqui eu uso *if* pra ver qual mão escolher, eu não posso passar a mão como parâmetro porque se eu alterar o parâmetro, a variável global não muda de valor
9. Esses *if* formatam o label que mostra a pontuação
10. Define se o jogador que apertou o botão perdeu
11. Desativa os botões do jogador que clicou no **Finalizar**
12. Se ambos botões **Finalizar** estiverem desativados o jogo termina, como há vários casos de vitória ou derrota, os *if* julgam qual final deve ser chamado comparando as pontuações
13. Desativa todos os botões e chama um dos finais (sim, meu jogo tem múltiplos finais com base nas suas decisões, se liga na qualidade 😎)
14. Ativa ou desativa todos os botões (exceto o **reiniciar**)
15. Mais código gerado automaticamente

```java
// OBS 1
package vetor;

import javax.swing.ImageIcon;

public class JogoDasCartas21 extends javax.swing.JFrame {

    private int mao1, mao2;
    
    // OBS 2
    public JogoDasCartas21() {
        initComponents();
        setResizable(false);
        painel.setOpaque(false);
        imgCarta(background, "background", "2");
        iniciar();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {
        // OBS 3
    }// </editor-fold>                        

    // OBS 4
    private void reiniciarActionPerformed(java.awt.event.ActionEvent evt) {                                          
        iniciar();
    }                                         

    private void j2FinalizarActionPerformed(java.awt.event.ActionEvent evt) {                                            
        finalizar(2);
    }                                           

    private void j2SacarActionPerformed(java.awt.event.ActionEvent evt) {                                        
        sacar(j2Label, j2Text, 1);
    }                                       

    private void j1FinalizarActionPerformed(java.awt.event.ActionEvent evt) {                                            
        finalizar(1);
    }                                           

    private void j1SacarActionPerformed(java.awt.event.ActionEvent evt) {                                        
        sacar(j1Label, j1Text, 2);
    }                                       

    private void j1NameKeyTyped(java.awt.event.KeyEvent evt) {                                
        if ((j1Name.getText() + evt.getKeyChar()).length() > 10)
            evt.consume();
    }                               

    private void j2NameKeyTyped(java.awt.event.KeyEvent evt) {                                
        if ((j2Name.getText() + evt.getKeyChar()).length() > 10)
            evt.consume();
    }                               
        
    // OBS 5
    private void iniciar() {
        onOffBotoes(true);
        mao1 = 0;
        mao2 = 0;
        this.imgCarta(j1Label, "background", "1");
        this.imgCarta(j2Label, "background", "1");
        j1Text.setText("Mão: ");
        j2Text.setText("Mão: ");
        titleLabel.setText("Bem vindo ao 21!");
    }
    
    private void imgCarta(javax.swing.JLabel label, String nape, String face) {
        ImageIcon imgCarta = new ImageIcon(getClass().getResource("/vetor/jogo/CartasBaralho/" + nape + " (" + face + ").png"));
        imgCarta.setImage(imgCarta.getImage().getScaledInstance(label.getWidth(), label.getHeight(), 1));
        label.setIcon(imgCarta);
    }
    
    private String setSortCarta(javax.swing.JLabel label) {
        String[] nps = {"Ouro", "Copas", "Espadas", "Paus"};
        String[] fcs = {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"};
        String nape = nps[(int)(Math.random()*4)];
        String face = fcs[(int)(Math.random()*13)];
        this.imgCarta(label, nape, face);
        return face;
    }
    
    // OBS 6
    private void sacar(javax.swing.JLabel label, javax.swing.JLabel text, int adversario) {
        int face = Integer.parseInt(setSortCarta(label));
        int mao;
        
        // OBS 7
        if(face > 10)
            face = 10;
            
        // OBS 8
        if (adversario==2) {
            mao1 += face;
            mao = mao1;
        } else {
            mao2 += face;
            mao = mao2;
        }
        
        // OBS 9
        if (text.getText() == "Mão: ")
            text.setText(text.getText() + face + " (" + mao + ")");
        else
            text.setText(text.getText().substring(0, text.getText().length()-(3+Integer.toString(mao-face).length())) + " +" + face + " (" + mao + ")");
        
        // OBS 10
        if(mao > 21){
            gameOver(adversario+2);
        }
    }
    
    private void finalizar(int jogador) {
    
        // OBS 11
        if (jogador == 1) {
            j1Sacar.setEnabled(false);
            j1Finalizar.setEnabled(false);
        } else {
            j2Sacar.setEnabled(false);
            j2Finalizar.setEnabled(false);
        }
        
        // OBS 12
        if (!j1Finalizar.isEnabled() & !j2Finalizar.isEnabled()) {
            if (mao1 > mao2)
                gameOver(1);
            else if (mao2 > mao1)
                gameOver(2);
            else
                gameOver(0);
        }
    }
    
    // OBS 13
    private void gameOver(int caso) {
        onOffBotoes(false);
        switch(caso){
            case 0 ->{
                titleLabel.setText("EMPATE: As mãos tem o mesmo valor!");
            }
            case 1 ->{
                titleLabel.setText(j1Name.getText().strip() + " venceu: A mão dele é a maior!");
            }
            case 2 ->{
                titleLabel.setText(j2Name.getText().strip() + " venceu: A mão dele é a maior!");
            }
            case 3 ->{
                titleLabel.setText(j1Name.getText().strip() + " venceu: " + j2Name.getText().strip() + " passou de 21");
            }
            case 4 ->{
                titleLabel.setText(j2Name.getText().strip() + " venceu: " + j1Name.getText().strip() + " passou de 21");
            }
        }
    }
    
    // OBS 14
    public void onOffBotoes(boolean bool) {
        j1Sacar.setEnabled(bool);
        j1Finalizar.setEnabled(bool);
        j2Sacar.setEnabled(bool);
        j2Finalizar.setEnabled(bool);
    }
    
    public static void main(String args[]) {
        // OBS 15
    }

    // Variables declaration - do not modify                     
    private javax.swing.JLabel background;
    private javax.swing.JButton j1Finalizar;
    private javax.swing.JLabel j1Label;
    private javax.swing.JTextField j1Name;
    private javax.swing.JButton j1Sacar;
    private javax.swing.JLabel j1Text;
    private javax.swing.JButton j2Finalizar;
    private javax.swing.JLabel j2Label;
    private javax.swing.JTextField j2Name;
    private javax.swing.JButton j2Sacar;
    private javax.swing.JLabel j2Text;
    private javax.swing.JLayeredPane jLayeredPane1;
    private javax.swing.JPanel painel;
    private javax.swing.JButton reiniciar;
    private javax.swing.JSeparator separador;
    private javax.swing.JLabel titleLabel;
    // End of variables declaration                   
}
```
