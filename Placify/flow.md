created with project and setup with mysql now go for how design works for our application
where i will explain how all entities are connected with each other here
Database Tables
--MasterAdmin ->name,id,email,role,profile details,profile pic.
--Student ->name,id,email,role,profile details,profile pic,address,current acedemic details,department_id.
--Admin ->name,id,email,role,profile details,profile pic,department_id.
--Company -> name, desription, rolesoffered , detailsofjob,id

conneting tables --> masteradmin is conneted with admin through department table because admin is created for each department
masteradmin is conneted with student with same using department table
here department table works as junction

now we aslo give roles to each user when they login they should login in proper dashborad according their id and role
so we need to maintain an role table where each entity have there id store and role_id and based on that role id we
make login which  portal.
--
1.MasterAdmin
-getMethods
--getStudents
--getAllStudnetsRegisterInParticularComapny where we need to specify company id so we need to map each student
when student register in company so it will show updated in campany specific table and then we should display
student info who is register in any particular company
2.Admin
3.Student