// DynamicEducationInputs.js
import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ResumeContext } from './ResumeContext';
import Colors from "../../../constants/Colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DynamicEducationInputs = ({ educationType,educationIndex }) => {

  const { resumeData, updateResumeData } = useContext(ResumeContext);
  const [uploadedImages, setUploadedImages] = useState({});
  const [openFromDatePicker, setOpenFromDatePicker] = useState(false);
  const [openToDatePicker, setOpenToDatePicker] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleUpload = (semester) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setUploadedImages(prevState => ({
          ...prevState,
          [semester]: source,
        }));
      }
    });
  };


  // useEffect(() => {
  //   if (resumeData.education[educationIndex]) {
  //     setFromDate(
  //       resumeData.education[educationIndex].startDate
  //         ? new Date(resumeData.education[educationIndex].startDate)
  //         : null
  //     );
  //     setToDate(
  //       resumeData.education[educationIndex].endDate
  //         ? new Date(resumeData.education[educationIndex].endDate)
  //         : null
  //     );
  //   }
  // }, [resumeData.education]);


  const handleChange = (value, field) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[educationIndex][field] = value; // Use educationIndex to update the correct object
    updateResumeData({ education: updatedEducation });
  };





  const renderInputs = () => {
    switch (educationType) {
      case 'tenth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].institution} // Access from context
            onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].passingyear} // Access from context
            onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput style={styles.inputField}
            value={resumeData.education[educationIndex].percentage} // Access from context
            onChangeText={(text) => handleChange(text, 'percentage')}
            />


            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}


          </View>
        );
      case 'twelfth':
        return (
          <View>
            <Text style={styles.inputLabel}>School/Board Name:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].institution} // Access from context
            onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Year of Passing 12:</Text>
            <TextInput style={styles.inputField}
            value={resumeData.education[educationIndex].passingyear} // Access from context
            onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].percentage} // Access from context
            onChangeText={(text) => handleChange(text, 'percentage')}
            />


            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[0]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}


          </View>
        );
      case 'diploma':
        return (
          <View>
            <Text style={styles.inputLabel}>Institute Name:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].institution} // Access from context
            onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Branch/Specialization:</Text>
            <TextInput style={styles.inputField}
            value={resumeData.education[educationIndex].degree} // Access from context
            onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Year of Completion:</Text>
            <TextInput style={styles.inputField}
            value={resumeData.education[educationIndex].passingyear} // Access from context
            onChangeText={(text) => handleChange(text, 'passingyear')}
            />
            <Text style={styles.inputLabel}>Percentage/CGPA:</Text>
            <TextInput style={styles.inputField}
            value={resumeData.education[educationIndex].percentage} // Access from context
            onChangeText={(text) => handleChange(text, 'percentage')}
            />


            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}


          </View>
        );
      case 'degree':
        return (
          <View>
            <Text style={styles.inputLabel}>College/University Name:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].institution} // Access from context
            onChangeText={(text) => handleChange(text, 'institution')}
            />
            <Text style={styles.inputLabel}>Major/Degree:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].degree} // Access from context
            onChangeText={(text) => handleChange(text, 'degree')}
            />
            <Text style={styles.inputLabel}>Graduation Year:</Text>
            <TextInput style={styles.inputField} 
            value={resumeData.education[educationIndex].passingyear} // Access from context
            onChangeText={(text) => handleChange(text, 'passingyear')}
            />


            <View style={styles.dateRow}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>From:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenFromDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.startDate
                      ? new Date(resumeData.education[educationIndex].startDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>To:</Text>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setOpenToDatePicker(true)}
                >
                  <FontAwesome name="calendar" size={20} color={Colors.primary} />
                  <Text style={styles.dateText}>
                    {resumeData.education[educationIndex]?.endDate
                      ? new Date(resumeData.education[educationIndex].endDate).toLocaleDateString()
                      : 'DD-MM-YYYY'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {resumeData.education[educationIndex]?.startDate && (
              <DatePicker
                modal
                open={openFromDatePicker}
                date={new Date(resumeData.education[educationIndex].startDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenFromDatePicker(false);
                  handleChange(date.toISOString(), 'startDate');
                }}
                onCancel={() => {
                  setOpenFromDatePicker(false);
                }}
              />
            )}
            {resumeData.education[educationIndex]?.endDate && (
              <DatePicker
                modal
                open={openToDatePicker}
                date={new Date(resumeData.education[educationIndex].endDate)}
                mode="date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onConfirm={(date) => {
                  setOpenToDatePicker(false);
                  handleChange(date.toISOString(), 'endDate');
                }}
                onCancel={() => {
                  setOpenToDatePicker(false);
                }}
              />
            )}


            {resumeData.education[educationIndex]?.semesterCGPA?.map((cgpa, index) => (
              <View key={index} style={styles.semesterContainer}>
                <Text style={styles.semesterText}>{`Sem ${index + 1} CGPA:`}</Text>
                <View style={styles.readOnlyInput}>
                  <Text>{cgpa}</Text>
                </View>
                <TouchableOpacity onPress={() => handleUpload(`Sem ${index + 1}`)}>
                  {uploadedImages[`Sem ${index + 1}`] && (
                    <Image
                      source={{ uri: uploadedImages[`Sem ${index + 1}`] }}
                      style={{ width: 50, height: 50 }}
                    />
                  )}
                  <Icon name="upload" size={24} color={Colors.dark} />
                </TouchableOpacity>
              </View>
            ))}
            <View style={styles.line}></View>
            <View style={styles.aggregateContainer}>
              <Text style={styles.AggsemesterText}>Aggregate CGPA:</Text>
              <View style={styles.AggreadOnlyInput}>
                <Text style={styles.AggCGPAText}>
                  {resumeData.education[educationIndex]?.aggregateCGPA || ''}
                </Text>
              </View>
            </View>


          </View>
        );
      default:
        return <Text>Please select an education type.</Text>;
    }
  };

  return <View>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  readOnlyInput: {
    backgroundColor: Colors.lightPrimary, // Assuming lightPrimary is defined in your Colors file
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  AggreadOnlyInput: {
    backgroundColor: Colors.lightPrimary, // Assuming lightPrimary is defined in your Colors file
    paddingVertical: 8,
    paddingHorizontal: 22,
    // marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  semesterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  semesterText: {
    flex: 1,
  },
  AggsemesterText: {
    flex: 1,
    fontSize: 14.5,
    fontWeight: 'bold',
  },
  AggCGPAText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  aggregateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 18,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginLeft: 5,
  },
});

export default DynamicEducationInputs;