//package com.training.placify;
//
//import com.itextpdf.text.Document;
//import com.itextpdf.text.DocumentException;
//import com.itextpdf.text.pdf.PdfWriter;
//import com.itextpdf.tool.xml.XMLWorkerHelper;
//import org.springframework.stereotype.Service;
//import org.thymeleaf.TemplateEngine;
//import org.thymeleaf.context.Context;
//
//import java.io.ByteArrayInputStream;
//import java.io.ByteArrayOutputStream;
//import java.io.IOException;
//import java.nio.charset.StandardCharsets;
//
//@Service
//public class LatexToPDF {
//
//    private final TemplateEngine templateEngine;
//
//    public LatexToPDF(TemplateEngine templateEngine) {
//        this.templateEngine = templateEngine;
//    }
//
//    public byte[] generatePDF(ResumeData data) throws IOException, DocumentException {
//        // 1. Prepare Thymeleaf context with data
//        Context context = new Context();
//        context.setVariable("resumeData", data);
//
//        // 2. Process the LaTeX template with Thymeleaf
//        String latexContent = templateEngine.process("latex-template", context);
//
//        // 3. Convert LaTeX to XHTML (replace with your LaTeX to XHTML method)
//        String xhtmlContent = convertToXHTML(latexContent); // Implement your conversion method
//
//        // 4. Generate PDF using Flyingsaucer
//        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
//            Document document = new Document();
//            PdfWriter writer = PdfWriter.getInstance(document, outputStream);
//            document.open();
//
//            XMLWorkerHelper.getInstance().parseXHtml(writer, document,
//                    new ByteArrayInputStream(xhtmlContent.getBytes(StandardCharsets.UTF_8)));
//
//            document.close();
//            return outputStream.toByteArray();
//        }
//    }
//
//    // Placeholder method - replace with your actual LaTeX to XHTML conversion logic
//    private String convertToXHTML(String latexContent) {
//        // Implement your conversion here (e.g., using libraries like Pandoc or custom logic)
//        return "";
//    }
//}