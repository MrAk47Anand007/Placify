package com.training.placify.controller.MasterAdmin;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.HttpMethod;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.training.placify.model.companyModel.Company;
import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.service.CompanyService;
import com.training.placify.service.PlacementDriveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = "http://192.168.29.79")
@RequestMapping("/api/companies")
public class CompanyController {

    @Value("${gcp.bucket.name}")
    private String bucketName;

    @Value("${spring.cloud.gcp.credentials.location}")
    private String credentialsPath;

    @Autowired
    private CompanyService companyService;

    @Autowired
    private PlacementDriveService placementDriveService;

    @PostMapping("/add")
    public ResponseEntity<Company> addCompany(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam(value = "logo", required = false) MultipartFile logoFile
    ) {
        try {
            Company company = new Company();
            company.setName(name);
            company.setDescription(description);

            if (logoFile != null) {
                byte[] compressedLogo = companyService.compressLogo(logoFile.getBytes());
                company.setLogo(compressedLogo);
            }

            // Save the company
            Company savedCompany = companyService.addCompany(company);

            // Create a folder in GCP with the name of the company inside "Master-admin"
            createCompanyFolderInGCP(savedCompany.getName());

            return ResponseEntity.status(HttpStatus.CREATED).body(savedCompany);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{companyId}/addDrive")
    public ResponseEntity<PlacementDrive> addPlacementDrive(
            @PathVariable Long companyId,
            @RequestBody PlacementDrive placementDrive
    ) {
        try {
            PlacementDrive savedDrive = companyService.addPlacementDrive(companyId, placementDrive);
//            createDriveFolderInGCP(savedDrive.getTitle(),savedDrive.getCompany().getName());
            return ResponseEntity.status(HttpStatus.CREATED).body(savedDrive);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @GetMapping("/{companyId}/getAllDrive")
    public ResponseEntity<List<PlacementDrive>> getAllPlacementDrives(@PathVariable Long companyId) {
        List<PlacementDrive> placementDrives = companyService.getAllPlacementDrive(companyId);
        return new ResponseEntity<>(placementDrives, HttpStatus.OK);
    }

    @GetMapping("/placementDrive/{placementDriveId}")
    public ResponseEntity<PlacementDrive> getPlacementDrive(@PathVariable Long placementDriveId) {
        Optional<PlacementDrive> placementDrive = placementDriveService.getPlacementDrive(placementDriveId);
        return placementDrive.map(drive -> new ResponseEntity<>(drive, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/delete/{companyId}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Long companyId) {
        try {
            companyService.deleteCompany(companyId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    @GetMapping("/drive/getSignedUrl")
//    public ResponseEntity<?> getSignedUrl(@RequestParam String fileName, @RequestParam String fileType) {
//        try {
//            FileInputStream serviceAccountStream = new FileInputStream(credentialsPath);
//
//            String objectName = "uploads/" + fileName;
//
//            Storage storage = StorageOptions.newBuilder()
//                    .setCredentials(ServiceAccountCredentials.fromStream(serviceAccountStream))
//                    .build()
//                    .getService();
//
//            BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, objectName).setContentType(fileType).build();
//            URL signedUrl = storage.signUrl(blobInfo, 15, TimeUnit.MINUTES, Storage.SignUrlOption.httpMethod(HttpMethod.PUT),
//                    Storage.SignUrlOption.withV4Signature());
//
//            if (signedUrl != null) {
//                return ResponseEntity.ok().body(Map.of("signedUrl", signedUrl.toString()));
//            } else {
//                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                        .body("Error generating signed URL");
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Error reading service account credentials: " + e.getMessage());
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Error generating signed URL: " + e.getMessage());
//        }
//    }

    private void createCompanyFolderInGCP(String companyName) {

        try {
            Storage storage = StorageOptions.newBuilder()
                    .setCredentials(ServiceAccountCredentials.fromStream(new FileInputStream(credentialsPath)))
                    .build()
                    .getService();

            String folderName = "Master-Admin/" + companyName + "/";
            BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, folderName).build();

            storage.create(blobInfo);
            System.out.println("Created folder: " + folderName + " in bucket: " + bucketName);
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    private void createDriveFolderInGCP(String DriveName,String companyName) {
        Storage storage = StorageOptions.getDefaultInstance().getService();
        String folderName = "Master-admin/" + companyName + "/" + DriveName +"/";

        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, folderName).build();

        // Create an empty blob to represent the folder
        storage.create(blobInfo);
    }
}
