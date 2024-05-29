package com.training.placify.service.Implementation;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.training.placify.model.Student;
import com.training.placify.model.resumeModel.ResumeData;
import com.training.placify.model.resumeModel.ResumeVersion;
import com.training.placify.repository.ResumeDataRepository;
import com.training.placify.repository.ResumeVersionRepository;
import com.training.placify.repository.StudentRepository;
import com.training.placify.service.ResumeService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@Service
public class ResumeServiceImpl implements ResumeService {

    @Autowired
    private ResumeDataRepository resumeDataRepository;

    @Autowired
    private ResumeVersionRepository resumeVersionRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Value("${spring.cloud.gcp.credentials.location}")
    private String credentialsPath;

    @Value("${gcp.bucket.name}")
    private String bucketName;

    private ExecutorService executorService = Executors.newCachedThreadPool();

    private void uploadFileToGCS(Long userId, Integer version, byte[] pdfData, String userName) throws IOException {
        String folderName = "user_data/" + userName + "_" + userId + "/";
        String fileName = "resume_v" + version + ".pdf";

        Storage storage = StorageOptions.newBuilder()
                .setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream(credentialsPath)))
                .build()
                .getService();

        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, folderName + fileName).build();
        storage.create(blobInfo, pdfData);
    }

    @Override
    public byte[] generateResume(ResumeData resumeData, Long studentId, Integer version) throws IOException, InterruptedException {
        PdfGenerationTask task = new PdfGenerationTask(resumeData);
        Future<String> future = executorService.submit(task, "");
        try {
            String pdfFilePath = future.get();
            byte[] pdfData = task.getPdfByteArray();

            // Upload the PDF to GCP
            Student student = studentRepository.findById(studentId).orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));
            uploadFileToGCS(studentId, version, pdfData, student.getCollegeEmail());

            return pdfData;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new IOException("PDF generation interrupted", e);
        } catch (ExecutionException e) {
            Throwable cause = e.getCause();
            if (cause instanceof RuntimeException) {
                throw (RuntimeException) cause;
            } else {
                throw new IOException("PDF generation failed", cause);
            }
        }
    }

    @Transactional
    @Override
    public ResumeData saveResumeDataAndVersion(final ResumeData resumeData, Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));

        Optional<Integer> latestVersionOpt = resumeVersionRepository.findLatestVersionByStudentId(studentId);
        int newVersion = latestVersionOpt.map(version -> version + 1).orElse(1);

        ResumeVersion resumeVersion = new ResumeVersion();
        resumeVersion.setStudent(student);
        resumeVersion.setResumeData(resumeData);
        resumeVersion.setVersion(newVersion);
        resumeVersion.setDateCreated(new Date());

        resumeData.getEducation().forEach(education -> education.setResumeData(resumeData));
        resumeData.getSkills().setResumeData(resumeData);
        resumeData.getExperience().forEach(experience -> experience.setResumeData(resumeData));
        resumeData.getExtraCurricularActivities().forEach(activity -> activity.setResumeData(resumeData));
        resumeData.getProjects().forEach(project -> project.setResumeData(resumeData));
        resumeData.getCoCurricularActivities().forEach(activity -> activity.setResumeData(resumeData));
        resumeData.getCertifications().forEach(certification -> certification.setResumeData(resumeData));

        resumeDataRepository.save(resumeData);
        resumeVersion.setResumeData(resumeData);
        resumeVersionRepository.save(resumeVersion);

        try {
            generateResume(resumeData, studentId, newVersion);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to generate and upload resume", e);
        }

        return resumeData;
    }

    @Override
    public void deleteResume(Long resumeVersionId) throws IOException {
        ResumeVersion resumeVersion = resumeVersionRepository.findById(resumeVersionId)
                .orElseThrow(() -> new RuntimeException("Resume version not found with ID: " + resumeVersionId));

        Long studentId = resumeVersion.getStudent().getId();
        String userName = resumeVersion.getStudent().getCollegeEmail();
        Integer version = resumeVersion.getVersion();
        String folderName = "user_data/" + userName + "_" + studentId + "/";
        String fileName = "resume_v" + version + ".pdf";

        Storage storage = StorageOptions.newBuilder()
                .setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream(credentialsPath)))
                .build()
                .getService();

        BlobId blobId = BlobId.of(bucketName, folderName + fileName);
        storage.delete(blobId);

        resumeVersionRepository.deleteById(resumeVersionId);
    }
}
