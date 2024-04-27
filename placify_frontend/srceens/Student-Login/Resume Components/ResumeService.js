// ResumeService.js or a similar file
import axios from 'axios';

const apiUrl = 'https://your-api-endpoint.com/resume'; // Replace with your actual API URL

export const generateResume = async (resumeData, token) => {
  try {
    const response = await axios.post(apiUrl, resumeData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token
      },
    });
    // Handle successful response
    console.log('Resume generated successfully:', response.data);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error generating resume:', error);
    throw error;
  }
};


// login --> jwt token ---> student -->  