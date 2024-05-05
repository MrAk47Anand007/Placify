import React, { createContext, useState } from 'react';

const initialResumeData = {
  name: 'Anand Sudhir Kale',
  address: '123 Main Street, Anytown, CA 12345',
  phoneNumber: '555-555-1212',
  email: 'anandkale@gmail.com',
  linkedin: 'https://www.linkedin.com/in/john-doe',
  github: 'https://www.linkedin.com/in/john-doe',
  website: 'https://johndoeportfolio.com',
  briefSummary: 'Seeking a challenging Software Developer position where I can leverage my skills in Python and Java to create innovative solutions.',
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      passingyear: '2024',
      startDate: '2018-09-01', // Example start date
      endDate: '2022-06-30', // Example end date
      percentage: '80',
      branch: 'Computer',
      semesterCGPA: ['7.55', '8.55', '8.55', '8.55', '8.55', '8.55', '8.55', '8.55'],
      aggregateCGPA: '89'
    },
    {
      degree: 'High School Diploma',
      institution: 'Anytown High School',
      startDate: '2014-09-01', // Example start date
      endDate: '2018-06-30' // Example end date
    }
  ],
  skills: {
    technicalSkills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL', 'React'],
    softSkills: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability']
  },
  experience: [
    {
      designation: 'Software Development Intern',
      organization: 'TechCorp Inc.',
      country: 'India',
      state: 'Gujarat',
      city: 'Surat',
      dates: 'Summer 2021',
      startDate: '2021-06-01', // Example start date
      endDate: '2021-08-31', // Example end date
      skills: ['DevOps, Kubernetes, AWS, Rest-API'],
      description: 'Developed Python scripts for data analysis and automation'
    }
  ],
  projects: [
    {
      title: 'Portfolio Website',
      description: 'A responsive website showcasing my skills and projects.',
      link: 'https://johndoeportfolio.com',
      teamSize: '4',
      keySkills: ['Angular, JS, React, Node'],
      startDate: '2020-12-02',
      endDate: '2024-01-14'
    },
    {
      title: 'Data Visualization Tool',
      description: 'A Python app to create interactive visualizations from CSV data.',
      link: 'https://johndoeGroceyApp.com',
      teamSize: '4',
      keySkills: ['Python, JS, React, Node'],
      startDate: '2019-12-02',
      endDate: '2023-11-12'
    }
  ],
  extraCurricularActivities: [
    {
      key: '1',
      value: 'Activity 1'
    },
    {
      key: '2',
      value: 'Activity 2'
    },
    {
      key: '3',
      value: 'Activity 3'
    }
  ],
  coCurricularActivities: [
    {
      key: '1',
      value: 'Co-curricular Activity 1'
    },
    {
      key: '2',
      value: 'Co-curricular Activity 2'
    },
    {
      key: '3',
      value: 'Co-curricular Activity 3'
    }
  ],

  certifications: [
    {
      name: 'Project of new',
      organization: 'Udemy',
    },
    {
      name: 'Complete java',
      organization: 'Udemy',
    }
  ],
};



  // Create a context with the initial data
const ResumeContext = createContext(initialResumeData);

// Create a provider component to manage and provide the resume data
const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeData);

  // Function to update the resume data
  const updateResumeData = (newData) => {
    setResumeData({ ...resumeData, ...newData }); 
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeContext, ResumeProvider };

//add here skills array in all sections.....
