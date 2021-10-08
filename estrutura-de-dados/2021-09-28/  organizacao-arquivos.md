### MatrizJogo.java

| [MatrizJogo](https://github.com/Honounome/nao-olhe/blob/main/estrutura-de-dados/2021-09-28/MatrizJogo.md) |
| --- |

```java

package matriz;

public class MatrizJogo extends javax.swing.JFrame {

    //boolean turno;
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
    private void initComponents() {

        jLayeredPane1 = new javax.swing.JLayeredPane();
        painelBotoes = new javax.swing.JPanel();
        botao00 = new javax.swing.JButton();
        botao01 = new javax.swing.JButton();
        botao02 = new javax.swing.JButton();
        botao10 = new javax.swing.JButton();
        botao11 = new javax.swing.JButton();
        botao12 = new javax.swing.JButton();
        botao20 = new javax.swing.JButton();
        botao21 = new javax.swing.JButton();
        botao22 = new javax.swing.JButton();
        riscos = new javax.swing.JPanel();
        risco = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        botao00.setBackground(new java.awt.Color(255, 255, 255));
        botao00.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao00.setToolTipText("");
        botao00.setContentAreaFilled(false);
        botao00.setMaximumSize(new java.awt.Dimension(126, 126));
        botao00.setMinimumSize(new java.awt.Dimension(126, 126));
        botao00.setOpaque(true);
        botao00.setPreferredSize(new java.awt.Dimension(126, 126));
        botao00.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao00ActionPerformed(evt);
            }
        });

        botao01.setBackground(new java.awt.Color(255, 255, 255));
        botao01.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao01.setContentAreaFilled(false);
        botao01.setMaximumSize(new java.awt.Dimension(126, 126));
        botao01.setMinimumSize(new java.awt.Dimension(126, 126));
        botao01.setOpaque(true);
        botao01.setPreferredSize(new java.awt.Dimension(126, 126));
        botao01.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao01ActionPerformed(evt);
            }
        });

        botao02.setBackground(new java.awt.Color(255, 255, 255));
        botao02.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao02.setContentAreaFilled(false);
        botao02.setMaximumSize(new java.awt.Dimension(126, 126));
        botao02.setMinimumSize(new java.awt.Dimension(126, 126));
        botao02.setOpaque(true);
        botao02.setPreferredSize(new java.awt.Dimension(126, 126));
        botao02.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao02ActionPerformed(evt);
            }
        });

        botao10.setBackground(new java.awt.Color(255, 255, 255));
        botao10.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao10.setContentAreaFilled(false);
        botao10.setMaximumSize(new java.awt.Dimension(126, 126));
        botao10.setMinimumSize(new java.awt.Dimension(126, 126));
        botao10.setOpaque(true);
        botao10.setPreferredSize(new java.awt.Dimension(126, 126));
        botao10.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao10ActionPerformed(evt);
            }
        });

        botao11.setBackground(new java.awt.Color(255, 255, 255));
        botao11.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao11.setContentAreaFilled(false);
        botao11.setMaximumSize(new java.awt.Dimension(126, 126));
        botao11.setMinimumSize(new java.awt.Dimension(126, 126));
        botao11.setOpaque(true);
        botao11.setPreferredSize(new java.awt.Dimension(126, 126));
        botao11.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao11ActionPerformed(evt);
            }
        });

        botao12.setBackground(new java.awt.Color(255, 255, 255));
        botao12.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao12.setContentAreaFilled(false);
        botao12.setMaximumSize(new java.awt.Dimension(126, 126));
        botao12.setMinimumSize(new java.awt.Dimension(126, 126));
        botao12.setOpaque(true);
        botao12.setPreferredSize(new java.awt.Dimension(126, 126));
        botao12.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao12ActionPerformed(evt);
            }
        });

        botao20.setBackground(new java.awt.Color(255, 255, 255));
        botao20.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao20.setContentAreaFilled(false);
        botao20.setMaximumSize(new java.awt.Dimension(126, 126));
        botao20.setMinimumSize(new java.awt.Dimension(126, 126));
        botao20.setOpaque(true);
        botao20.setPreferredSize(new java.awt.Dimension(126, 126));
        botao20.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao20ActionPerformed(evt);
            }
        });

        botao21.setBackground(new java.awt.Color(255, 255, 255));
        botao21.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao21.setContentAreaFilled(false);
        botao21.setMaximumSize(new java.awt.Dimension(126, 126));
        botao21.setMinimumSize(new java.awt.Dimension(126, 126));
        botao21.setOpaque(true);
        botao21.setPreferredSize(new java.awt.Dimension(126, 126));
        botao21.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao21ActionPerformed(evt);
            }
        });

        botao22.setBackground(new java.awt.Color(255, 255, 255));
        botao22.setFont(new java.awt.Font("Segoe UI", 0, 100)); // NOI18N
        botao22.setContentAreaFilled(false);
        botao22.setMaximumSize(new java.awt.Dimension(126, 126));
        botao22.setMinimumSize(new java.awt.Dimension(126, 126));
        botao22.setOpaque(true);
        botao22.setPreferredSize(new java.awt.Dimension(126, 126));
        botao22.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botao22ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout painelBotoesLayout = new javax.swing.GroupLayout(painelBotoes);
        painelBotoes.setLayout(painelBotoesLayout);
        painelBotoesLayout.setHorizontalGroup(
            painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(painelBotoesLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(botao00, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao20, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(botao21, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao11, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao01, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(botao22, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao12, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao02, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        painelBotoesLayout.setVerticalGroup(
            painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(painelBotoesLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(botao00, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao01, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao02, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(botao12, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao10, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao11, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(painelBotoesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(botao21, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao20, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(botao22, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );

        javax.swing.GroupLayout riscosLayout = new javax.swing.GroupLayout(riscos);
        riscos.setLayout(riscosLayout);
        riscosLayout.setHorizontalGroup(
            riscosLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(risco, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 402, Short.MAX_VALUE)
        );
        riscosLayout.setVerticalGroup(
            riscosLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(risco, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 402, Short.MAX_VALUE)
        );

        jLayeredPane1.setLayer(painelBotoes, javax.swing.JLayeredPane.DEFAULT_LAYER);
        jLayeredPane1.setLayer(riscos, javax.swing.JLayeredPane.DEFAULT_LAYER);

        javax.swing.GroupLayout jLayeredPane1Layout = new javax.swing.GroupLayout(jLayeredPane1);
        jLayeredPane1.setLayout(jLayeredPane1Layout);
        jLayeredPane1Layout.setHorizontalGroup(
            jLayeredPane1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jLayeredPane1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(painelBotoes, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(jLayeredPane1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jLayeredPane1Layout.createSequentialGroup()
                    .addContainerGap()
                    .addComponent(riscos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addContainerGap()))
        );
        jLayeredPane1Layout.setVerticalGroup(
            jLayeredPane1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jLayeredPane1Layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(painelBotoes, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
            .addGroup(jLayeredPane1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(jLayeredPane1Layout.createSequentialGroup()
                    .addContainerGap()
                    .addComponent(riscos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addContainerGap()))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jLayeredPane1)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jLayeredPane1)
        );

        pack();
    }// </editor-fold>                        

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
        /*
        if(turno)
            marcar.setText("X");
        else
            marcar.setText("O");
        */
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
        
        //turno = !turno;
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
    
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
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
            java.util.logging.Logger.getLogger(MatrizJogo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(MatrizJogo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(MatrizJogo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(MatrizJogo.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new MatrizJogo().setVisible(true);
            }
        });
    }

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

### Design

Componentes:

![image](https://user-images.githubusercontent.com/80454712/135251500-55f7f942-3246-40ee-aa7a-2cad76f77458.png)

NetBeans:

![image](https://user-images.githubusercontent.com/80454712/135251089-6b1e8535-e852-4781-a269-ac4ad5e22b6d.png)

Executando:

![image](https://user-images.githubusercontent.com/80454712/135251319-9522a12c-346a-45bc-bfe2-a83be469c1fa.png)
