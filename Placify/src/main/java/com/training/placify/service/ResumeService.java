package com.training.placify.service;

import com.training.placify.model.resumeModel.ResumeData;

import java.io.FileNotFoundException;
import java.io.IOException;

public interface ResumeService {

    byte[] generateResume(ResumeData resumeData, Long studentId, Integer version) throws IOException, InterruptedException;

    ResumeData saveResumeDataAndVersion(ResumeData resumeData, Long studentId);

    void deleteResume(Long resumeVersionId) throws IOException;
}
