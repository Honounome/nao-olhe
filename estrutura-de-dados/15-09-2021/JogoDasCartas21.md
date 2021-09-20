### Crie um jogo de 21 para duas pessoas (acho q é esse o comando)

OBSERVAÇÕES:

1. 

```java
package vetor;

import javax.swing.ImageIcon;

public class JogoDasCartas21 extends javax.swing.JFrame {

    private int mao1, mao2;
    
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
        // código gerado automaticamente
    }// </editor-fold>                        

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
    
    private void sacar(javax.swing.JLabel label, javax.swing.JLabel text, int adversario) {
        int face = Integer.parseInt(setSortCarta(label));
        int mao;
        if(face > 10)
            face = 10;
        if (adversario==2) {
            mao1 += face;
            mao = mao1;
        } else {
            mao2 += face;
            mao = mao2;
        }
        if (text.getText() == "Mão: ")
            text.setText(text.getText() + face + " (" + mao + ")");
        else
            text.setText(text.getText().substring(0, text.getText().length()-(3+Integer.toString(mao-face).length())) + " +" + face + " (" + mao + ")");
        if(mao > 21){
            gameOver(adversario+2);
        }
    }
    
    private void finalizar(int jogador) {
        if (jogador == 1) {
            j1Sacar.setEnabled(false);
            j1Finalizar.setEnabled(false);
        } else {
            j2Sacar.setEnabled(false);
            j2Finalizar.setEnabled(false);
        }
        if (!j1Finalizar.isEnabled() & !j2Finalizar.isEnabled()) {
            if (mao1 > mao2)
                gameOver(1);
            else if (mao2 > mao1)
                gameOver(2);
            else
                gameOver(0);
        }
    }
    
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
    
    public void onOffBotoes(boolean bool) {
        j1Sacar.setEnabled(bool);
        j1Finalizar.setEnabled(bool);
        j2Sacar.setEnabled(bool);
        j2Finalizar.setEnabled(bool);
    }
    
    public static void main(String args[]) {
        // também não importa
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
