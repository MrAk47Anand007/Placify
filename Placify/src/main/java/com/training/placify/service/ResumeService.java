package com.training.placify.service;

import com.training.placify.model.ResumeData;
import java.io.IOException;

public interface ResumeService {

    /**
     * Generates a PDF resume based on the provided ResumeData.
     *
     * @param resumeData The ResumeData object containing the resume information.
     * @return The path to the generated PDF file.
     * @throws IOException If an error occurs during PDF generation.
     */
    byte[] generateResume(ResumeData resumeData) throws IOException, InterruptedException;
}