package com.training.placify.service.Implementation;

import com.training.placify.model.ResumeData;
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
                .replace("%WEBSITE%", resumeData.getWebsite())
                .replace("%OBJECTIVE%", resumeData.getObjective());

        template = template.replace("%EDUCATION%", generateEducationSection(resumeData.getEducation()))
                .replace("%TECHNICAL_SKILLS%", generateSimpleList(resumeData.getSkills().getTechnicalSkills()))
                .replace("%SOFT_SKILLS%", generateSimpleList(resumeData.getSkills().getSoftSkills()))
                .replace("%EXPERIENCE%", generateExperienceSection(resumeData.getExperience()))
                .replace("%PROJECTS%", generateProjectSection(resumeData.getProjects()))
                .replace("%EXTRA_CURRICULAR%", generateList(resumeData.getExtraCurricularActivities()));


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

    private CharSequence generateList(List<String> items) {
        StringBuilder list = new StringBuilder();
        list.append("\\begin{itemize}\n");
        for (String item : items) {
            list.append("\\item ").append(item).append("\n");
        }
        list.append("\\end{itemize}\n");
        return list.toString();
    }

    private CharSequence generateProjectSection(List<ResumeData.Project> projects) {
        StringBuilder projectSection = new StringBuilder();
        projectSection.append("\\begin{itemize}\n");
        for (ResumeData.Project project : projects) {
            projectSection.append("\\item \\textbf{").append(project.getTitle()).append(".} \\\\ \n");
            projectSection.append("{").append(project.getDescription()).append("}\n");
            if (project.getLink() != null) {
                projectSection.append("{\\href{").append(project.getLink()).append("}{(Try it here)}}\n");
            }
        }
        projectSection.append("\\end{itemize} ");
        return projectSection.toString();
    }

    private CharSequence generateExperienceSection(List<ResumeData.Experience> experience) {
        StringBuilder experienceSection = new StringBuilder();
        for (ResumeData.Experience exp : experience) {
            experienceSection.append("\\textbf{").append(exp.getRole()).append("} \\hfill ")
                    .append(exp.getDates()).append("\\\\ \\hfill {").append(exp.getCompany()).append("}\\\n");
            if (exp.getResponsibilities() != null) {
                experienceSection.append("\\begin{itemize}\n");
                for (String achievement : exp.getResponsibilities()) {
                    experienceSection.append("\\item ").append(achievement).append("\n");
                }
                experienceSection.append("\\end{itemize}\n");
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

    private CharSequence generateEducationSection(List<ResumeData.Education> education) {
        StringBuilder educationSection = new StringBuilder();
        educationSection.append("\\begin{itemize}");
        for(ResumeData.Education entry: education){
            educationSection.append("\\item").append("\\textbf{").append(entry.getDegree()).append("}, ")
                    .append(entry.getInstitution()).append("\\hfill {").append(entry.getDates()).append("}");

            List<String> relevantCoursework = entry.getRelevantCoursework();
            if (relevantCoursework != null && !relevantCoursework.isEmpty()) {
                educationSection.append("\\\\ \\textit{Relevant Coursework:} ");
                for (int i = 0; i < relevantCoursework.size(); i++) {
                    educationSection.append(relevantCoursework.get(i));
                    if (i < relevantCoursework.size() - 1) {
                        educationSection.append(", ");
                    }
                }
                educationSection.append("\n");
            }
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