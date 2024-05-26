package com.training.placify.service.Implementation;

import com.training.placify.model.companyModel.PlacementDrive;
import com.training.placify.repository.PlacementDriveRepository;
import com.training.placify.service.PlacementDriveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlacementDriveServiceImpl implements PlacementDriveService {

    @Autowired
    private PlacementDriveRepository placementDriveRepository;

    @Override
    public Optional<PlacementDrive> getPlacementDrive(Long placementDriveId) {
        return placementDriveRepository.findById(placementDriveId);
    }
}
