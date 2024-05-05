package com.training.placify;
import com.training.placify.service.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


@SpringBootApplication
public class PlacifyApplication {
	@Autowired
	private ResumeService resumeService;
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(PlacifyApplication.class, args);
	}
}