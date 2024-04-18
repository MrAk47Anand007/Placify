package com.training.placify;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        File imageFile = new File("E:\\Final_Project\\Placify\\Placify\\src\\main\\java\\com\\training\\placify\\marksheet1.jpg");
        ITesseract instance = new Tesseract();

        // Set the language (optional)
        instance.setLanguage("eng"); // For English

        try {
            String result = instance.doOCR(imageFile);
            // Regex pattern
            String pattern = "(\\d+\\.\\d+)";




            // Creating a Pattern object
            Pattern p = Pattern.compile(pattern);

            // Creating a Matcher object
            Matcher m = p.matcher(result);

            // Find the first occurrence of the pattern
            if (m.find()) {
                String value = m.group(1);
                System.out.println("Extracted value: " + value);
            } else {
                System.out.println("No match found.");
            }
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
}
