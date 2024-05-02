package com.training.placify.service.Implementation;

import com.training.placify.model.Student;
import com.training.placify.model.Department;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.resumeModel.Education;
import com.training.placify.model.resumeModel.ResumeData;
import com.training.placify.model.resumeModel.ResumeVersion;
import com.training.placify.repository.EducationRepository;
import com.training.placify.service.EligibilityEvaluator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class EligibilityEvaluatorImpl implements EligibilityEvaluator {

    @Autowired
    private EducationRepository educationRepository;

    @Override
    public boolean isStudentEligible(Student student, EligibilityCriteria criteria) {
        // 1. Get the latest resume data for the student
        ResumeData resumeData = getLatestResumeData(student);


        List<Education> educationRecords = educationRepository.findByResumeDataId(resumeData.getId());

        // Separate into school and higher education groups
        List<Education> schoolRecords = educationRecords.stream()
                .filter(e -> e.getPercentage() != null)
                .sorted(Comparator.comparing(Education::getEndDate))
                .collect(Collectors.toList());

        List<Education> higherEducationRecords = educationRecords.stream()
                .filter(e -> e.getDegree() != null)
                .sorted(Comparator.comparing(Education::getStartDate))
                .toList();

        double tenthGrade = Double.parseDouble(null);
        double twelfthGrade = Double.parseDouble(null);
        double Degree;
        if (schoolRecords.size() == 1) {
            twelfthGrade = Double.parseDouble(schoolRecords.get(0).getPercentage());
        } else if (schoolRecords.size() == 2) {
            schoolRecords.sort(Comparator.comparing(Education::getEndDate));
            tenthGrade = Double.parseDouble(schoolRecords.get(0).getPercentage());
            twelfthGrade = Double.parseDouble(schoolRecords.get(1).getPercentage());
        }

        Degree= Double.parseDouble(higherEducationRecords.get(0).getAggregateCGPA());

        if (criteria.getMinimumTenthMarks() != null && tenthGrade < criteria.getMinimumTenthMarks()) {
            return false;
        }
        if (criteria.getMinimumTwelfthMarks() != null && twelfthGrade < criteria.getMinimumTwelfthMarks()) {
            return false;
        }
        if (criteria.getMinimumCgpa() != null && Degree < criteria.getMinimumCgpa()) {
            return false;
        }
        if(criteria.getGender()!=null && !Objects.equals(student.getGender(), criteria.getGender())){
            return false;
        }

        String studentBranch = higherEducationRecords.get(0).getBranch(); // Assuming the branch is in the latest higher education record
        if (!criteria.getEligibleDepartments().stream()
                .map(Department::getName)
                .anyMatch(departmentName -> departmentName.equalsIgnoreCase(studentBranch))) {
            return false; // Student's branch is not eligible
        }


        return true; // Return true if the student is eligible, false otherwise
    }

    private ResumeData getLatestResumeData(Student student) {
        // 1. Fetch resume versions for the student and sort by version (descending)
        List<ResumeVersion> resumeVersions = student.getResumeVersions().stream()
                .sorted(Comparator.comparing(ResumeVersion::getVersion).reversed())
                .toList();

        // 2. Get the latest resume data from the first version (highest version number)
        if (!resumeVersions.isEmpty()) {
            return resumeVersions.get(0).getResumeData();
        } else {
            // Handle case where student has no resume versions (e.g., return null or throw exception)
            return null; // Or throw an exception
        }
    }

}
