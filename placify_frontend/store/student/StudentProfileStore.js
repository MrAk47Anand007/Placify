// src/stores/StudentProfileStore.js
import { Store } from 'pullstate';

const StudentProfileStore = new Store({
  isBlocked: false,
  showMore: false,
  studentInfo: {
    name: 'John Doe',
    dob: '01/01/2000',
    course: 'BE',
    department: 'Computer Engineering',
    email: 'john.doe@example.com',
    linkedin: 'linkedin.com/in/johndoe',
    portfolio: 'johndoe.com',
    talent: 'Software Development',
    resume: 'path/to/resume.pdf',
    appliedCompanies: [
      { name: 'Company A', role: 'Software Engineer', ctc: '10 LPA', url: 'https://companya.com' },
      { name: 'Company B', role: 'Data Analyst', ctc: '8 LPA', url: 'https://companyb.com' },
    ],
  },
});

export default StudentProfileStore;