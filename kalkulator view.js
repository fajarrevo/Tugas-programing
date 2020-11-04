package view;

import java.text.DecimalFormat;
import javax.swing.JOptionPane;
import model.KalkulatorModel;

public class KalkulatorView extends javax.swing.JFrame {
public KalkulatorView() {
initComponents();
}

KalkulatorModel model = new KalkulatorModel();
String operand=””;

public void getOperand(javax.swing.JButton button){
operand+=button.getText();
model.setOperand(operand);
resultLabel.setText(operand);
}

private void getOperator(int opt){
model.setOperator(opt);
operand=””;
}
private void process(){
DecimalFormat df = new DecimalFormat(“#,###.########”);
model.process();
operand = “”;
resultLabel.setText(df.format(model.getResult())+””);
}

private void button1ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button1);
}

private void button2ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button2);
}

private void button3ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button3);
}

private void button4ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button4);
}

private void button5ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button5);
}

private void button6ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button6);
}

private void button7ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button7);
}

private void button8ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button8);
}

private void button9ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button9);
}

private void buttonTambahActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(1);
}

private void buttonKurangActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(2);
}

private void buttonKaliActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(3);
}

private void buttonBagiActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(4);
}

private void buttonModulusActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(5);
}

private void buttonSeperActionPerformed(java.awt.event.ActionEvent evt) {
getOperator(6);
}

private void buttonSamaDenganActionPerformed(java.awt.event.ActionEvent evt) {
process();
}

private void button11ActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(button11);
}

private void buttonKomaActionPerformed(java.awt.event.ActionEvent evt) {
getOperand(buttonKoma);
}

private void button12ActionPerformed(java.awt.event.ActionEvent evt) {
if(operand.length()>1){
operand = operand.substring(0, operand.length()-1);
model.setOperand(operand);
resultLabel.setText(operand);
}else{
operand = “”;
model.setOperand(operand);
resultLabel.setText(“0″);
}
}

private void buttonACActionPerformed(java.awt.event.ActionEvent evt) {
operand = “”;
model.setOperator(0);
model.setResult(0);
resultLabel.setText(“0″);
}

private void menuExitActionPerformed(java.awt.event.ActionEvent evt) {
if(JOptionPane.showConfirmDialog(rootPane, “Keluar dari Aplikasi ?”,”Exit Application”,1)==0){
System.exit(0);
}
}

private void aboutMenuActionPerformed(java.awt.event.ActionEvent evt) {
JOptionPane.showMessageDialog(rootPane, “<html><body><center>Contoh Kalkulator Sederhana<br>”
+ “Modifikasi by : <br>”
+ “<a href=’https://gtrtrr.com</a></center></body></html>”);
}

// Variables declaration – do not modify
private javax.swing.JMenuItem aboutMenu;
private javax.swing.JButton button1;
private javax.swing.JButton button11;
private javax.swing.JButton button12;
private javax.swing.JButton button2;
private javax.swing.JButton button3;
private javax.swing.JButton button4;
private javax.swing.JButton button5;
private javax.swing.JButton button6;
private javax.swing.JButton button7;
private javax.swing.JButton button8;
private javax.swing.JButton button9;
private javax.swing.JButton buttonAC;
private javax.swing.JButton buttonBagi;
private javax.swing.JButton buttonKali;
private javax.swing.JButton buttonKoma;
private javax.swing.JButton buttonKurang;
private javax.swing.JButton buttonModulus;
private javax.swing.JButton buttonSamaDengan;
private javax.swing.JButton buttonSeper;
private javax.swing.JButton buttonTambah;
private javax.swing.JMenu helpMenu;
private javax.swing.JMenuBar jMenuBar1;
private javax.swing.JPanel jPanel1;
private javax.swing.JPanel jPanel2;
private javax.swing.JPanel jPanel3;
private javax.swing.JMenuItem menuExit;
private javax.swing.JMenu menuFile;
private javax.swing.JLabel resultLabel;
// End of variables declaration

}