//package com.training.placify.service.Implementation;
//
//import com.training.placify.model.Student;
//import com.training.placify.model.Department;
//import com.training.placify.model.companyModel.EligibilityCriteria;
//import com.training.placify.model.resumeModel.Education;
//import com.training.placify.model.resumeModel.ResumeData;
//import com.training.placify.model.resumeModel.ResumeVersion;
//import com.training.placify.repository.EducationRepository;
//import com.training.placify.service.EligibilityEvaluator;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Comparator;
//import java.util.List;
//import java.util.Objects;
//import java.util.stream.Collectors;
//
//@Service
//public class EligibilityEvaluatorImpl implements EligibilityEvaluator {
//
//    @Autowired
//    private EducationRepository educationRepository;
//
//    @Override
//    public boolean isStudentEligible(Student student, EligibilityCriteria criteria) {
//        ResumeData resumeData = getLatestResumeData(student);
//        if (resumeData == null) return false;
//
//        List<Education> educationRecords = educationRepository.findByResumeDataId(resumeData.getId());
//        List<Education> schoolRecords = getSchoolRecords(educationRecords);
//        List<Education> higherEducationRecords = getHigherEducationRecords(educationRecords);
//
//        double tenthGrade = 0.0;
//        double twelfthGrade = 0.0;
//        double degreePercentage = 0.0;
//
//        if (schoolRecords.size() == 1) {
//            twelfthGrade = Double.parseDouble(schoolRecords.get(0).getPercentage());
//        } else if (schoolRecords.size() == 2) {
//            tenthGrade = Double.parseDouble(schoolRecords.get(0).getPercentage());
//            twelfthGrade = Double.parseDouble(schoolRecords.get(1).getPercentage());
//        }
//
//        if (!higherEducationRecords.isEmpty()) {
//            degreePercentage = Double.parseDouble(higherEducationRecords.get(0).getPercentage());
//        }
//
//        if (criteria.getMinimumTenthMarks() != null && tenthGrade < criteria.getMinimumTenthMarks()) {
//            return false;
//        }
//        if (criteria.getMinimumTwelfthMarks() != null && twelfthGrade < criteria.getMinimumTwelfthMarks()) {
//            return false;
//        }
//        if (criteria.getMinimumCgpa() != null && degreePercentage < criteria.getMinimumCgpa()) {
//            return false;
//        }
//        if (criteria.getGender() != null && !Objects.equals(student.getGender(), criteria.getGender())) {
//            return false;
//        }
//
//        String studentBranch = higherEducationRecords.get(0).getBranch();
//        if (!criteria.getEligibleDepartments().stream()
//                .map(Department::getName)
//                .anyMatch(departmentName -> departmentName.equalsIgnoreCase(studentBranch))) {
//            return false;
//        }
//
//        return true;
//    }
//
//    private ResumeData getLatestResumeData(Student student) {
//        List<ResumeVersion> resumeVersions = student.getResumeVersions().stream()
//                .sorted(Comparator.comparing(ResumeVersion::getVersion).reversed())
//                .collect(Collectors.toList());
//
//        return !resumeVersions.isEmpty() ? resumeVersions.get(0).getResumeData() : null;
//    }
//
//    private List<Education> getSchoolRecords(List<Education> educationRecords) {
//        return educationRecords.stream()
//                .filter(e -> e.getPercentage() != null && (e.getDegree() == null || e.getDegree().isEmpty()))
//                .sorted(Comparator.comparing(Education::getEndDate))
//                .collect(Collectors.toList());
//    }
//
//    private List<Education> getHigherEducationRecords(List<Education> educationRecords) {
//        return educationRecords.stream()
//                .filter(e -> e.getPercentage() != null && e.getDegree() != null && !e.getDegree().isEmpty())
//                .sorted(Comparator.comparing(Education::getStartDate))
//                .collect(Collectors.toList());
//    }
//}

package com.training.placify.service.Implementation;

import com.training.placify.model.Student;
import com.training.placify.model.Department;
import com.training.placify.model.companyModel.EligibilityCriteria;
import com.training.placify.model.resumeModel.Education;
import com.training.placify.model.resumeModel.ResumeData;
import com.training.placify.model.resumeModel.ResumeVersion;
import com.training.placify.repository.DepartmentRepository;
import com.training.placify.repository.EducationRepository;
import com.training.placify.service.EligibilityEvaluator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;

@Service
public class EligibilityEvaluatorImpl implements EligibilityEvaluator {

    @Autowired
    private EducationRepository educationRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public boolean isStudentEligible(Student student, EligibilityCriteria criteria) {
        ResumeData resumeData = getLatestResumeData(student);
        if (resumeData == null) return false;

        Department studentDepartment = student.getDepartment();
        if (studentDepartment == null) {
            return false;
        }

        List<Education> educationRecords = educationRepository.findByResumeDataId(resumeData.getId());
        if (educationRecords.size() < 3) return false; // Ensure there are at least 3 records

        double tenthGrade = Double.parseDouble(educationRecords.get(0).getPercentage());
        double twelfthGrade = Double.parseDouble(educationRecords.get(1).getPercentage());
        double degreePercentage = Double.parseDouble(educationRecords.get(2).getPercentage());

        if (criteria.getMinimumTenthMarks() != null && tenthGrade < criteria.getMinimumTenthMarks()) {
            return false;
        }
        if (criteria.getMinimumTwelfthMarks() != null && twelfthGrade < criteria.getMinimumTwelfthMarks()) {
            return false;
        }
        if (criteria.getMinimumCgpa() != null && degreePercentage < criteria.getMinimumCgpa()) {
            return false;
        }
        if (criteria.getGender() != null && !criteria.getGender().equalsIgnoreCase("Any") &&
                !Objects.equals(student.getGender(), criteria.getGender())) {
            return false;
        }


        if (!criteria.getEligibleDepartments().stream()
                .map(Department::getName)
                .anyMatch(departmentName -> departmentName.equalsIgnoreCase(studentDepartment.getName()))) {
            return false;
        }

        return true;
    }

    private ResumeData getLatestResumeData(Student student) {
        return student.getResumeVersions().stream()
                .max(Comparator.comparing(ResumeVersion::getVersion))
                .map(ResumeVersion::getResumeData)
                .orElse(null);
    }
}
