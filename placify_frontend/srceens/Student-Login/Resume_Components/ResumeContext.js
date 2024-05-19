import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        // Load initial data from AsyncStorage when the app starts
        const loadResumeData = async () => {
            try {
                const savedData = await AsyncStorage.getItem('resumeData');
                if (savedData) {
                    setResumeData(JSON.parse(savedData));
                } else {
                    // Set your initial data if there's no saved data
                    const initialResumeData = {
                      name: '',
                      address: '',
                      phoneNumber: '',
                      email: '',
                      linkedin: '',
                      github: '',
                      website: '',
                      briefSummary: '',
                      education: [], // Initialize as empty arrays
                      skills: {
                        technicalSkills:[],
                        softSkills: []
                      },
                      experience: [],
                      projects: [],
                      extraCurricularActivities: [],
                      coCurricularActivities: [],
                      certifications: [],
                    };
                    setResumeData(initialData);
                    await AsyncStorage.setItem('resumeData', JSON.stringify(initialData));
                }
            } catch (error) {
                console.error('Failed to load resume data', error);
            }
        };

        loadResumeData();
    }, []);

    const updateResumeData = async (updatedFields) => {
        try {
            const updatedData = { ...resumeData, ...updatedFields };
            setResumeData(updatedData);
            await AsyncStorage.setItem('resumeData', JSON.stringify(updatedData));
        } catch (error) {
            console.error('Failed to update resume data', error);
        }
    };

    return (
        <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
            {children}
        </ResumeContext.Provider>
    );
};
