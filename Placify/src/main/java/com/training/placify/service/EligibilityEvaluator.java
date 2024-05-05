package com.training.placify.service;

import com.training.placify.model.Student;
import com.training.placify.model.companyModel.EligibilityCriteria;

public interface EligibilityEvaluator{
    boolean isStudentEligible(Student student, EligibilityCriteria criteria);
}
