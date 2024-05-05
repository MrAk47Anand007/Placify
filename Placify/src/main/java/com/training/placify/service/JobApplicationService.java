package com.training.placify.service;

import com.training.placify.model.companyModel.JobApplication;

public interface JobApplicationService {
    JobApplication applyForJob(Long studentId, Long placementDriveId, Long resumeVersionId);
}

