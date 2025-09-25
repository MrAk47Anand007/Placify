package com.training.placify.service.Implementation;

import com.training.placify.model.resumeModel.*;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.exec.*;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class PdfGenerationTask implements Runnable {

    private final ResumeData resumeData;
    @Getter
    @Setter
    private byte[] pdfByteArray; // To store the generated PDF path

    public PdfGenerationTask(ResumeData resumeData) {
        this.resumeData = resumeData;
    }

    @Override
    public void run() {
        try {
            String latexCode = generateLatexCode(resumeData);
            Path tempDir = Files.createTempDirectory("latex");
            Path clsFile = Paths.get("E:\\Final_Project\\Placify\\Placify\\src\\main\\resources\\resume.cls"); // Replace with the actual path
            Files.copy(clsFile, tempDir.resolve(clsFile.getFileName()));
            File tempTexFile = tempDir.resolve("resume.tex").toFile();
            try (BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(tempTexFile), StandardCharsets.UTF_8))) {
                writer.write(latexCode);
            }
            System.out.println(tempTexFile.getAbsolutePath());
            // ... (Save LaTeX code to a temporary file)

            CommandLine cmdLine = new CommandLine("pdflatex");
            cmdLine.addArgument("-interaction=nonstopmode");
            cmdLine.addArgument("-output-directory");
            cmdLine.addArgument(tempDir.toString());
            cmdLine.addArgument(tempTexFile.getAbsolutePath());


            DefaultExecutor executor = new DefaultExecutor();
            executor.setExitValue(0); // Set expected exit value for success
            ExecuteWatchdog watchdog = new ExecuteWatchdog(60000); // Timeout after 60 seconds
            executor.setWatchdog(watchdog);

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            PumpStreamHandler streamHandler = new PumpStreamHandler(outputStream);
            executor.setStreamHandler(streamHandler);

            int exitValue = executor.execute(cmdLine);
            if (exitValue != 0) {
                // Handle error
                String errorOutput = outputStream.toString(StandardCharsets.UTF_8);
                throw new RuntimeException("PDF generation failed with exit code: " + exitValue
                        + "\nError output:\n" + errorOutput);
            } else {
                File pdfFile = tempDir.resolve("resume.pdf").toFile();
                pdfByteArray = Files.readAllBytes(pdfFile.toPath());
            }
        } catch (ExecuteException e) {
            // Handle execution errors (e.g., command not found, timeout)
            throw new RuntimeException("Error executing pdflatex command: " + e.getMessage(), e);
        } catch (IOException e) {
            // Handle IO errors (e.g., file access, temporary directory creation)
            throw new RuntimeException("IO error during PDF generation: " + e.getMessage(), e);
        }
    }

    private String generateLatexCode(ResumeData resumeData) throws IOException {
        String template = loadTemplate();
        template = template.replace("%NAME%", resumeData.getName())
                .replace("%ADDRESS%", resumeData.getAddress())
                .replace("%PHONE_NUMBER%", resumeData.getPhoneNumber())
                .replace("%EMAIL%", resumeData.getEmail())
                .replace("%LINKEDIN%", resumeData.getLinkedin())
                .replace("%OBJECTIVE%", resumeData.getBriefSummary())
                .replace("%GITHUB%", resumeData.getGithub())
                .replace("%EDUCATION%", generateEducationSection(resumeData.getEducation()))
                .replace("%TECHNICAL_SKILLS%", generateSimpleList(resumeData.getSkills().getTechnicalSkills()))
                .replace("%SOFT_SKILLS%", generateSimpleList(resumeData.getSkills().getSoftSkills()))
                .replace("%EXPERIENCE%", generateExperienceSection(resumeData.getExperience()))
                .replace("%PROJECTS%", generateProjectSection(resumeData.getProjects()))
                .replace("%EXTRA_CURRICULAR%", generateExtraCurricularActivities(resumeData.getExtraCurricularActivities()))
                .replace("%CO_CURRICULAR%",generateCoCurricularActivities(resumeData.getCoCurricularActivities()))
                .replace("%CERTIFICATIONS%",generateCertifications(resumeData.getCertifications()));


        return template;

//        try {
//            BufferedWriter writer = new BufferedWriter(new FileWriter("output.tex"));
//            writer.write(template);
//            writer.close();
//            String outputPath = new File("output.tex").getAbsolutePath(); // Get absolute path of the generated file
//            System.out.println("LaTeX file generated successfully at: " + outputPath);
//            return outputPath; // Return the absolute path of the generated file
//        } catch (IOException e) {
//            System.err.println("Error writing LaTeX file: " + e.getMessage());
//            return null; // Return null if an error occurs
//        }

    }

    private CharSequence generateExtraCurricularActivities(List<ExtraCurricularActivity> extraCurricularActivities) {
        StringBuilder ExActSection = new StringBuilder();
        ExActSection.append("\\begin{itemize}\n");
        for (ExtraCurricularActivity extraCurricularActivity : extraCurricularActivities) {
            String activityName = extraCurricularActivity.getValue();
            if (activityName != null && !activityName.isEmpty()) {
                ExActSection.append("\\item ").append(activityName).append("\n");
            }
        }
        ExActSection.append("\\end{itemize}\n");
        return ExActSection.toString();
    }

    private CharSequence generateCoCurricularActivities(List<CoCurricularActivity> coCurricularActivities) {
        StringBuilder coCurSection = new StringBuilder();
        coCurSection.append("\\begin{itemize}\n");
        for (CoCurricularActivity coCurricularActivity : coCurricularActivities) {
            String activityName = coCurricularActivity.getValue();
            if (activityName != null && !activityName.isEmpty()) {
                coCurSection.append("\\item ").append(activityName).append("\n");
            }
        }
        coCurSection.append("\\end{itemize}\n");
        return coCurSection.toString();
    }

    private CharSequence generateCertifications(List<Certification> certifications) {
        StringBuilder certSection = new StringBuilder();
        certSection.append("\\begin{itemize}\n");
        for (Certification certification : certifications) {
            String certName = certification.getName();
            String organization = certification.getOrganization();
            if (certName != null && !certName.isEmpty() && organization != null && !organization.isEmpty()) {
                certSection.append("\\item ").append(certName).append(" (").append(organization).append(")\n");
            }
        }
        certSection.append("\\end{itemize}\n");
        return certSection.toString();
    }
    private CharSequence generateList(List<String> items) {
        StringBuilder list = new StringBuilder();
        list.append("\\begin{itemize}\n");
        for (String item : items) {
            list.append("\\item ").append(item).append("\n");
        }
        list.append("\\end{itemize}\n");
        return list.toString();
    }

    private CharSequence generateProjectSection(List<Project> projects) {
        StringBuilder projectSection = new StringBuilder();
        projectSection.append("\\begin{itemize}\n");
        for (Project project : projects) {
            projectSection.append("\\item \\textbf{").append(project.getTitle()).append(".} \\hfill")
                    .append(project.getStartDate().substring(0,4)+"-"+project.getEndDate().substring(0,4))
                    .append("\\\\ \n");
            projectSection.append("{").append(project.getDescription()).append("}\n");
            if (project.getLink() != null) {
                projectSection.append("{\\href{").append(project.getLink()).append("}{(Try it here)}} \\\\\n");
            }
            if (project.getKeySkills()!=null){
                projectSection.append("Key Skills:");
                for(String skill:project.getKeySkills()){
                    projectSection.append(skill+",");
                }
            }

        }
        projectSection.append("\\end{itemize} ");
        return projectSection.toString();
    }

    private CharSequence generateExperienceSection(List<Experience> experience) {
        StringBuilder experienceSection = new StringBuilder();
        for (Experience exp : experience) {
            experienceSection.append("\\textbf{").append(exp.getDesignation()).append("} \\hfill ")
                    .append(exp.getStartDate().substring(0,4)+"-"+exp.getEndDate().substring(0,4)).append("\\\\ \\hfill {")
                    .append(exp.getOrganization()).append("}").append(exp.getCountry()).append("\\\\\n");
            if (exp.getDescription() != null) {
                experienceSection.append(exp.getDescription()).append("\\\\\n");
            }
            if (exp.getSkills() != null) {
                experienceSection.append("Skills:");
                for(String skill:exp.getSkills()){
                    experienceSection.append(skill+",");
                }
                experienceSection.append("\\\\\n");
            }

        }
        return experienceSection.toString();
    }

    private CharSequence generateSimpleList(List<String> skills) {
        StringBuilder list = new StringBuilder();
        for (String skill : skills) {
            list.append(skill).append(", ");
        }
        if (!list.isEmpty()) {
            list.setLength(list.length() - 2);
        }
        return list.toString();
    }

    private CharSequence generateEducationSection(List<Education> education) {
        StringBuilder educationSection = new StringBuilder();
        educationSection.append("\\begin{itemize}");
        for(Education entry: education){
            educationSection.append("\\item").append("\\textbf{").append(entry.getDegree()).append("}, ")
                    .append(entry.getInstitution()).append("\\hfill {").append(entry.getStartDate().substring(0,4)+"-"+entry.getEndDate().substring(0,4))
                    .append("}").append("\\\\ \\textit{Passing Year:} ").append(entry.getPassingyear());

            if(entry.getPercentage()!=null){
                educationSection.append(" \\\\\\textit{Percentage:} ").append(entry.getPercentage());
            }
            if(entry.getAggregateCGPA()!=null){
                educationSection.append(" \\\\\\textit{CGPA:} ").append(entry.getAggregateCGPA());
            }
            educationSection.append("\n");

        }
        educationSection.append("\\end{itemize}");
        return educationSection.toString();
    }


    private String loadTemplate() throws IOException {
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("resume.tex");
        if (inputStream == null) {
            throw new IOException("Template not found: " + "resume.tex");
        }
        return new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines()
                .reduce((acc, line) -> acc + "\n" + line).orElse("");
    }
}