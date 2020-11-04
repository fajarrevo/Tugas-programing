package GanjilGenap; 
import javax.swing.JOptionPane;

public class ganjilgenap { 
    public static void main(String[] args) {
        int[] bilangan = new int[2];
        int bil1,bil2;
        int i;
        
        
        for (i = 0; i<2; i++){
            String nilai = JOptionPane.showInputDialog("Masukkan Bilangan: ");
            bilangan[i] = Integer.parseInt(nilai);
            System.out.println("Input Bilangan: "+nilai);
        }
        
        //menentukan bilangan ganjil genap
        for (i=0; i<2; i++){
            if (bilangan[i] %2 == 1){
            System.out.println("Bilangan "+bilangan[i]+" GANJIL");
            }
            else
            System.out.println("Bilangan "+bilangan[i]+" GENAP");
        }
    }  
}