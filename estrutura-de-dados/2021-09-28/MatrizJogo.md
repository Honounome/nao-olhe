### Faça um jogo da velha

OBSERVAÇÕES:



```java

package matriz;

public class MatrizJogo extends javax.swing.JFrame {

    boolean turnoCpu;
    javax.swing.JButton[][] botoes;
    String[][] pos = new String[8][3];
    int[][][] posLnCol = {{{0,0}, {0,1}, {0,2}},
                          {{1,0}, {1,1}, {1,2}},
                          {{2,0}, {2,1}, {2,2}},
                          {{0,0}, {1,0}, {2,0}}, 
                          {{0,1}, {1,1}, {2,1}},
                          {{0,2}, {1,2}, {2,2}},
                          {{0,0}, {1,1}, {2,2}},
                          {{0,2}, {1,1}, {2,0}}};
    
    public MatrizJogo() {
        initComponents();
        for(int i = 0; i < pos.length; i++) {
            for(int j = 0; j < pos[i].length; j++)
                pos[i][j] = "";
        }
        botoes = new javax.swing.JButton[][]{{botao00, botao01, botao02},
                                             {botao10, botao11, botao12},
                                             {botao20, botao21, botao22}};
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {...}// </editor-fold>                        

    private void botao00ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(0, 0);
        cpu();
    }                                       

    private void botao01ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(0, 1);
        cpu();
    }                                       

    private void botao10ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(1, 0);
        cpu();
    }                                       

    private void botao11ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(1, 1);
        cpu();
    }                                       

    private void botao12ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(1, 2);
        cpu();
    }                                       

    private void botao20ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(2, 0);
        cpu();
    }                                       

    private void botao21ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(2, 1);
        cpu();
    }                                       

    private void botao22ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(2, 2);
        cpu();
    }                                       

    private void botao02ActionPerformed(java.awt.event.ActionEvent evt) {                                        
        marcar(0, 2);
        cpu();
    }                                       

    private void marcar(int ln, int col, String xo) {
        botoes[ln][col].setEnabled(false);
        botoes[ln][col].setText(xo);
        
        pos[ln][col] = botoes[ln][col].getText();
        pos[col+3][ln] = botoes[ln][col].getText();
        if(ln == col)
            pos[6][ln] = botoes[ln][col].getText();
        if(ln + col == 2)
            pos[7][ln] = botoes[ln][col].getText();
        
        System.out.println();
        for(String[] i : pos) {
            for(String j : i) {
                System.out.printf("%1s ", j);
            }
            System.out.println();
        }
    }
    
    private void marcar(int ln, int col) {
        marcar(ln, col, "X");
    }
    
    private void cpu() {
        if(disp()) {
            int[][] posVaz = new int[8][2];
            int qntVaz = 0;
            int rdm;
            if(analise("O")) {
                if(analise("X")) {
                    for(int i = 0; i < 3; i++) {
                        for(int j = 0; j < 3; j++) {
                            if("".equals(pos[i][j])) {
                                posVaz[qntVaz][0] = i;
                                posVaz[qntVaz][1] = j;
                                qntVaz++;
                            }
                        }
                    }
                    rdm = (int)(Math.random()*qntVaz);
                    marcar(posVaz[rdm][0], posVaz[rdm][1], "O");
                }
            }
        }
    }
    
    private boolean analise(String xo) {
        for(int i = 0; i < pos.length; i++) {
            if(xo.equals(pos[i][0]) && xo.equals(pos[i][1]) && "".equals(pos[i][2])) {
                marcar(posLnCol[i][2][0],posLnCol[i][2][1], "O");
                return false;
            } else if(xo.equals(pos[i][0]) && "".equals(pos[i][1]) && xo.equals(pos[i][2])) {
                marcar(posLnCol[i][1][0],posLnCol[i][1][1], "O");
                return false;
            } else if("".equals(pos[i][0]) && xo.equals(pos[i][1]) && xo.equals(pos[i][2])) {
                marcar(posLnCol[i][0][0],posLnCol[i][0][1], "O");
                return false;
            }
        }
        return true;
    }
    
    private boolean disp() {
        for(int i = 0; i < 3; i++)
            for(int j = 0; j < 3; j++)
                if("".equals(pos[i][j]))
                    return true;
        return false;
    }
    
    public static void main(String args[]) {...}

    // Variables declaration - do not modify                     
    private javax.swing.JButton botao00;
    private javax.swing.JButton botao01;
    private javax.swing.JButton botao02;
    private javax.swing.JButton botao10;
    private javax.swing.JButton botao11;
    private javax.swing.JButton botao12;
    private javax.swing.JButton botao20;
    private javax.swing.JButton botao21;
    private javax.swing.JButton botao22;
    private javax.swing.JLayeredPane jLayeredPane1;
    private javax.swing.JPanel painelBotoes;
    private javax.swing.JLabel risco;
    private javax.swing.JPanel riscos;
    // End of variables declaration                   
}

```
