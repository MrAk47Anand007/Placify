package com.training.placify;
import com.training.placify.model.ResumeData;
import com.training.placify.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.io.IOException;
import java.util.Arrays;


@SpringBootApplication
public class PlacifyApplication {
	@Autowired
	private ResumeService resumeService;
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PlacifyApplication.class, args);
//		PlacifyApplication app = context.getBean(PlacifyApplication.class);
//		app.testResumeGeneration();
	}

//	private void testResumeGeneration() {
//		ResumeData resumeData = createSampleResumeData();
//		try {
//			// Generate resume PDF
//			String pdfFilePath = resumeService.generateResume(resumeData);
//			System.out.println("Generated PDF: " + pdfFilePath);
//		} catch (IOException | InterruptedException e) {
//			System.err.println("Error generating PDF: " + e.getMessage());
//		}
//	}

//	private ResumeData createSampleResumeData() {
//		// Set personal information
//		ResumeData resumeData=new ResumeData();
//		resumeData.setName("John Doe");
//		resumeData.setAddress("123 Main Street, City, Country");
//		resumeData.setPhoneNumber("+1234567890");
//		resumeData.setEmail("john.doe@example.com");
//		resumeData.setLinkedin("linkedin.com/in/johndoe");
//		resumeData.setWebsite("johndoe.com");
//		resumeData.setObjective("Experienced software engineer seeking new opportunities.");
//
//		// Set education
//		ResumeData.Education education1 = new ResumeData.Education("Bachelor of Science in Computer Science", "University of XYZ", "2015-2019", Arrays.asList("Data Structures", "Algorithms", "Database Systems"));
//		ResumeData.Education education2 = new ResumeData.Education("Master of Science in Software Engineering", "ABC University", "2020-2022", Arrays.asList("Software Architecture", "Agile Development", "Cloud Computing"));
//		resumeData.setEducation(Arrays.asList(education1, education2));
//
//		// Set skills
//		ResumeData.Skills skills = new ResumeData.Skills();
//		skills.setTechnicalSkills(Arrays.asList("Java", "Python", "Spring Boot", "JavaScript"));
//		skills.setSoftSkills(Arrays.asList("Communication", "Teamwork", "Problem Solving"));
//		resumeData.setSkills(skills);
//
//		// Set experience
//		ResumeData.Experience experience1 = new ResumeData.Experience("Software Engineer", "Tech Company A", "City A", "2019-2021", Arrays.asList("Developed web applications using Java and Spring Boot", "Collaborated with cross-functional teams"));
//		ResumeData.Experience experience2 = new ResumeData.Experience("Senior Software Engineer", "Tech Company B", "City B", "2021-present", Arrays.asList("Led software development projects", "Mentored junior developers"));
//		resumeData.setExperience(Arrays.asList(experience1, experience2));
//
//		// Set projects
//		ResumeData.Project project1 = new ResumeData.Project("E-commerce Website", "Developed a fully functional e-commerce website using Spring Boot and React.js", "https://github.com/johndoe/e-commerce");
//		ResumeData.Project project2 = new ResumeData.Project("Chat Application", "Built a real-time chat application with WebSocket technology", null);
//		resumeData.setProjects(Arrays.asList(project1, project2));
//
//		// Set extra-curricular activities
//		resumeData.setExtraCurricularActivities(Arrays.asList("Volunteered at local animal shelter", "Organized coding workshops for beginners"));
//
//		return resumeData;
//	}
}