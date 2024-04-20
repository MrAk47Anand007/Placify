package com.training.placify.service.Implementation;

import com.training.placify.service.StudentService;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class StudentServiceImpl implements StudentService {

    // ExecutorService with a fixed thread pool size
    private ExecutorService executorService = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    @Override
    public String performOcr(MultipartFile image) throws IOException, TesseractException {
        byte[] bytes = image.getBytes();
        BufferedImage bufferedImage = ImageIO.read(new ByteArrayInputStream(bytes));

        if (bufferedImage == null) {
            throw new IOException("Could not decode image");
        }

        // Submit the OCR task to the executor service
        Future<String> future = executorService.submit(() -> {
            BufferedImage originalImage = new BufferedImage(bufferedImage.getWidth(), bufferedImage.getHeight(),
                    BufferedImage.TYPE_BYTE_GRAY);
            originalImage.getGraphics().drawImage(bufferedImage, 0, 0, null);

            // Calculate new dimensions (example: reduce by 50%)
            int newWidth = originalImage.getWidth() / 2;
            int newHeight = originalImage.getHeight() / 2;

            // Create a new BufferedImage with the resized dimensions
            BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = resizedImage.createGraphics();
            g.drawImage(originalImage, 0, 0, newWidth, newHeight, null);
            g.dispose();

            ITesseract instance = new Tesseract();
            instance.setTessVariable("user_defined_dpi", "300");
            instance.setLanguage("eng"); // For English

            try {
                String result = instance.doOCR(originalImage);
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
                    return value;
                } else {
                    System.out.println("No match found.");
                    return null;
                }
            } catch (TesseractException e) {
                System.err.println(e.getMessage());
                return null;
            }
        });

        try {
            // Wait for the OCR task to complete and get the result
            return future.get();
        } catch (Exception e) {
            throw new RuntimeException("Error executing OCR task", e);
        }
    }
}
