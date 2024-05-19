package com.training.placify.model.companyModel;

import com.training.placify.model.Department;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @Lob
    @Column(columnDefinition = "OID") // Use OID for PostgreSQL
    private byte[] logo;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private List<PlacementDrive> placementDrives;
}