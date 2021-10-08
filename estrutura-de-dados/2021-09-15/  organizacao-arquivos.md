### JogoDasCartas21

| [JogoDasCartas21](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-15/JogoDasCartas21.md) |
| --- |

```java
package vetor;

import javax.swing.ImageIcon;

public class JogoDasCartas21 extends javax.swing.JFrame {

    int mao1, mao2;
    
    public JogoDasCartas21() {
        initComponents();
        setResizable(false);
        iniciar();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        j1Name = new javax.swing.JTextField();
        j2Name = new javax.swing.JTextField();
        j1Label = new javax.swing.JLabel();
        j2Label = new javax.swing.JLabel();
        jSeparator1 = new javax.swing.JSeparator();
        j1Sacar = new javax.swing.JButton();
        j1Finalizar = new javax.swing.JButton();
        j2Sacar = new javax.swing.JButton();
        j2Finalizar = new javax.swing.JButton();
        j1Text = new javax.swing.JLabel();
        j2Text = new javax.swing.JLabel();
        titleLabel = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        j1Name.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        j1Name.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        j1Name.setText("Jogador 1");
        j1Name.setPreferredSize(new java.awt.Dimension(150, 22));
        j1Name.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                j1NameActionPerformed(evt);
            }
        });
        j1Name.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                j1NameKeyTyped(evt);
            }
        });

        j2Name.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        j2Name.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        j2Name.setText("Jogador 2");
        j2Name.setPreferredSize(new java.awt.Dimension(150, 22));

        jSeparator1.setOrientation(javax.swing.SwingConstants.VERTICAL);
        jSeparator1.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));

        j1Sacar.setText("Sacar");
        j1Sacar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        j1Sacar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                j1SacarActionPerformed(evt);
            }
        });

        j1Finalizar.setText("Finalizar");
        j1Finalizar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        j1Finalizar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                j1FinalizarActionPerformed(evt);
            }
        });

        j2Sacar.setText("Sacar");
        j2Sacar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        j2Sacar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                j2SacarActionPerformed(evt);
            }
        });

        j2Finalizar.setText("Finalizar");
        j2Finalizar.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        j2Finalizar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                j2FinalizarActionPerformed(evt);
            }
        });

        j1Text.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        j1Text.setText("Mão:");

        j2Text.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        j2Text.setText("Mão:");

        titleLabel.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        titleLabel.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        titleLabel.setText("WWWWWWWWWW venceu: WWWWWWWWWW passou de 21");

        jButton1.setText("Reiniciar");
        jButton1.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton1.setPreferredSize(new java.awt.Dimension(80, 22));
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(50, 50, 50)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.CENTER)
                        .addComponent(j1Label, javax.swing.GroupLayout.PREFERRED_SIZE, 208, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(j1Name, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addComponent(j1Text, javax.swing.GroupLayout.PREFERRED_SIZE, 208, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(j1Sacar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(j1Finalizar)))
                .addGap(24, 24, 24)
                .addComponent(jSeparator1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(23, 23, 23)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.CENTER)
                    .addComponent(j2Label, javax.swing.GroupLayout.PREFERRED_SIZE, 208, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(j2Name, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(j2Sacar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(j2Finalizar))
                    .addComponent(j2Text, javax.swing.GroupLayout.PREFERRED_SIZE, 208, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(50, 50, 50))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(titleLabel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(titleLabel, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(12, 12, 12)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(j1Name, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(j2Name, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(j1Text)
                            .addComponent(j2Text))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.CENTER)
                            .addComponent(j2Label, javax.swing.GroupLayout.PREFERRED_SIZE, 303, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(j1Label, javax.swing.GroupLayout.PREFERRED_SIZE, 303, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                .addComponent(j1Sacar)
                                .addComponent(j1Finalizar))
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                .addComponent(j2Sacar)
                                .addComponent(j2Finalizar))))
                    .addComponent(jSeparator1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>                        

    private void j1SacarActionPerformed(java.awt.event.ActionEvent evt) {                                        
        sacar(j1Label, j1Text, 2);
    }                                       

    private void j1FinalizarActionPerformed(java.awt.event.ActionEvent evt) {                                            
        finalizar(1);
        
    }                                           

    private void j2SacarActionPerformed(java.awt.event.ActionEvent evt) {                                        
        sacar(j2Label, j2Text, 1);
    }                                       

    private void j2FinalizarActionPerformed(java.awt.event.ActionEvent evt) {                                            
        finalizar(2);
    }                                           

    private void j1NameKeyTyped(java.awt.event.KeyEvent evt) {                                
        if ((j1Name.getText() + evt.getKeyChar()).length() > 10) {
            evt.consume();
        }
    }                               

    private void j1NameActionPerformed(java.awt.event.ActionEvent evt) {                                       
        // TODO add your handling code here:
    }                                      

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        iniciar();
    }                                        
    
    private void iniciar() {
        onOffButtons(true);
        mao1 = 0;
        mao2 = 0;
        this.imgCarta(j1Label, "background", "1");
        this.imgCarta(j2Label, "background", "1");
        j1Text.setText("Mão:");
        j2Text.setText("Mão:");
        titleLabel.setText("Bem vindo ao 21!");
        /*for(int i=0; i<2; i++) {
            sacar(j1Label, j1Text, 2);
            sacar(j2Label, j2Text, 1);
        }*/
    }
    
    private void imgCarta(javax.swing.JLabel label, String nape, String face) {
        ImageIcon imgCarta = new ImageIcon(getClass().getResource("/vetor/jogo/CartasBaralho/" + nape + " (" + face + ").png"));
        imgCarta.setImage(imgCarta.getImage().getScaledInstance(208, 303, 1));
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
        text.setText(text.getText() + " +" + face);
        if (adversario==2) {
            mao1 += face;
            mao = mao1;
        } else {
            mao2 += face;
            mao = mao2;
        }
        System.out.println(mao);
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
        onOffButtons(false);
        switch(caso){
            case 0 ->{
                titleLabel.setText("EMPATE: As mãos tem o mesmo valor!");
            }
            case 1 ->{
                titleLabel.setText(j1Name.getText() + " venceu: A mão dele é a maior!");
            }
            case 2 ->{
                titleLabel.setText(j2Name.getText() + " venceu: A mão dele é a maior!");
            }
            case 3 ->{
                titleLabel.setText(j1Name.getText() + " venceu: " + j2Name.getText() + " passou de 21");
            }
            case 4 ->{
                titleLabel.setText(j2Name.getText() + " venceu: " + j1Name.getText() + " passou de 21");
            }
        }
    }
    
    public void onOffButtons(boolean bool) {
        j1Sacar.setEnabled(bool);
        j1Finalizar.setEnabled(bool);
        j2Sacar.setEnabled(bool);
        j2Finalizar.setEnabled(bool);
    }
    
    public static void wait(int ms){
        try
        {
            Thread.sleep(ms);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void main(String args[]) {
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(JogoDasCartas21.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(JogoDasCartas21.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(JogoDasCartas21.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(JogoDasCartas21.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new JogoDasCartas21().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                     
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
    private javax.swing.JButton jButton1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JSeparator jSeparator1;
    private javax.swing.JLabel titleLabel;
    // End of variables declaration                   
}

```

### Design

NetBeans:

![image](https://user-images.githubusercontent.com/80454712/133703609-7c78a071-b842-433b-8b01-9ada0df23722.png)

Executando:

![image](https://user-images.githubusercontent.com/80454712/133703717-b8777c4e-579f-4e67-99b3-006726cc7144.png)
