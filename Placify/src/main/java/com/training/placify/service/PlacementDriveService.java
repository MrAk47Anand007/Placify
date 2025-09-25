package com.training.placify.service;

import com.training.placify.model.companyModel.PlacementDrive;

import java.util.Optional;

public interface PlacementDriveService {
     Optional<PlacementDrive> getPlacementDrive(Long placementDriveId);
}
