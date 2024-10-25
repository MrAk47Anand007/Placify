# Database Design and Relationships

This document explains the database design and relationships between different entities in the Placify application.

## Entities

### MasterAdmin
- **Attributes**: name, id, email, role, profile details, profile pic

### Student
- **Attributes**: name, id, email, role, profile details, profile pic, address, current academic details, department_id

### Admin
- **Attributes**: name, id, email, role, profile details, profile pic, department_id

### Company
- **Attributes**: name, description, roles offered, details of job, id

## Connecting Tables

The `MasterAdmin` is connected with `Admin` through the `department` table because an admin is created for each department. Similarly, the `MasterAdmin` is connected with `Student` using the `department` table. Here, the `department` table works as a junction.

## Roles and Login Portals

Each user is assigned a role when they log in. They should log in to the appropriate dashboard according to their id and role. We need to maintain a `role` table where each entity has their id stored along with the role_id. Based on that role_id, we determine which portal to log in to.

## Methods

### MasterAdmin
- **getMethods**
  - `getStudents`
  - `getAllStudentsRegisteredInParticularCompany`: This method requires specifying the company id. We need to map each student when they register in a company so that it will show updated in the company-specific table. Then, we should display student info who is registered in any particular company.

### Admin
- **Methods**: (Add details about the methods for Admin)

### Student
- **Methods**: (Add details about the methods for Student)
