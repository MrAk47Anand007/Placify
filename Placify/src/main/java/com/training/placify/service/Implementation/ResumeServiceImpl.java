package com.training.placify.service.Implementation;


import com.training.placify.model.ResumeData;
import com.training.placify.service.ResumeService;

import org.springframework.stereotype.Service;
import java.io.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@Service
public class ResumeServiceImpl implements ResumeService {
    private ExecutorService executorService = Executors.newCachedThreadPool();
    @Override
    public byte[] generateResume(ResumeData resumeData) throws IOException, InterruptedException {
        PdfGenerationTask task = new PdfGenerationTask(resumeData);
        Future<String> future = executorService.submit(task, ""); // Submit with a placeholder result
        try {
            String pdfFilePath = future.get(); // Wait for the task to complete
            return task.getPdfByteArray();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restore interrupted status
            throw new IOException("PDF generation interrupted", e);
        } catch (ExecutionException e) {
            // Unwrap the original exception from PdfGenerationTask
            Throwable cause = e.getCause();
            if (cause instanceof RuntimeException) {
                throw (RuntimeException) cause;
            } else {
                throw new IOException("PDF generation failed", cause);
            }
        }

    }
}
