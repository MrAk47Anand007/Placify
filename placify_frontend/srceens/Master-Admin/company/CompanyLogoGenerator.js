import axios from 'axios';

const getCompanyLogo = async (companyName) => {
  try {
    const response = await axios.get(`https://logo.clearbit.com/${companyName}.com`);
    if (response.status === 200) {
      return `https://logo.clearbit.com/${companyName}.com`;
    }
  } catch (error) {
    console.error('Error fetching company logo:', error);
  }
  // Return default logo if not found or error
  return 'https://example.com/default-logo.png'; // Replace with your default logo URL
};

export default getCompanyLogo;
