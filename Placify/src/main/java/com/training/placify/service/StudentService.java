package com.training.placify.service;

import net.sourceforge.tess4j.TesseractException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StudentService {

    String performOcr(MultipartFile image) throws IOException, TesseractException;


}
