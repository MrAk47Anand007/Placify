import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Card, Button, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import FileViewer from 'react-native-file-viewer';
// import RNFS from 'react-native-fs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StudentProfileStore from '../../store/student/StudentProfileStore'

const MA_studentProfile = () => {
  // Use Pullstate to manage state
  const { isBlocked, showMore, studentInfo } = StudentProfileStore.useState(s => ({
    isBlocked: s.isBlocked,
    showMore: s.showMore,
    studentInfo: s.studentInfo
  }));

  const toggleBlock = () => {
    StudentProfileStore.update(s => {
      s.isBlocked = !s.isBlocked;
    });
  };

  const toggleShowMore = () => {
    StudentProfileStore.update(s => {
      s.showMore = !s.showMore;
    });
  };

  const viewResume = async () => {
    try {
      await FileViewer.open(studentInfo.resume);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadResume = async () => {
    // const localFile = ${RNFS.DocumentDirectoryPath}/resume.pdf;
    const options = {
      fromUrl: studentInfo.resume,
      toFile: localFile,
    };
    try {
      await RNFS.downloadFile(options).promise;
      console.log('Resume downloaded to', localFile);
      await FileViewer.open(localFile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1500} style={styles.profilePhotoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }} // Using a placeholder image
          style={styles.profilePhoto}
        />
        <Button
          icon={isBlocked ? "lock-open" : "block-helper"}
          mode="contained"
          onPress={() => toggleBlock(!isBlocked)}
          style={[styles.blockButton, isBlocked ? styles.unblockButton : {}]}
          labelStyle={styles.buttonText}
        >
          {isBlocked ? 'Unblock' : 'Block'}
        </Button>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" duration={1500}>
        <Card style={styles.profileSection}>
          <Card.Title title="Profile" />
          <Card.Content style={styles.profileContent}>
            <View style={styles.profileInfo}>
              <FontAwesome name="user" size={24} color="#666" style={styles.icon} />
              <Text style={styles.infoText}>{studentInfo.name}</Text>
            </View>
            <View style={styles.profileInfo}>
              <FontAwesome name="calendar" size={24} color="#666" style={styles.icon} />
              <Text style={styles.infoText}>Date of Birth: {studentInfo.dob}</Text>
            </View>
            <View style={styles.profileInfo}>
              <FontAwesome name="graduation-cap" size={24} color="#666" style={styles.icon} />
              <Text style={styles.infoText}>Course & Department: {studentInfo.course}-{studentInfo.department}</Text>
            </View>
            {showMore && (
              <>
                <View style={styles.profileInfo}>
                  <FontAwesome name="envelope" size={24} color="#666" style={styles.icon} />
                  <Text style={styles.infoText}>Email: {studentInfo.email}</Text>
                </View>
                <View style={styles.profileInfo}>
                  <FontAwesome name="linkedin" size={24} color="#0077b5" style={styles.icon} />
                  <Text style={styles.infoText}>LinkedIn: {studentInfo.linkedin}</Text>
                </View>
                <View style={styles.profileInfo}>
                  <FontAwesome name="globe" size={24} color="#666" style={styles.icon} />
                  <Text style={styles.infoText}>Portfolio: {studentInfo.portfolio}</Text>
                </View>
                <View style={styles.profileInfo}>
                  <FontAwesome name="star" size={24} color="#f39c12" style={styles.icon} />
                  <Text style={styles.infoText}>Special Talent: {studentInfo.talent}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <Button icon="file-download" mode="outlined" onPress={downloadResume}>Download Resume</Button>
                  <Button icon="eye" mode="outlined" onPress={viewResume}>View Resume</Button>
                </View>
              </>
            )}
            <Button onPress={() => toggleShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.appliedCompaniesSection}>
          <Card.Title title="Applied Companies" />
          <Card.Content>
            {studentInfo.appliedCompanies.map((company, index) => (
              <TouchableOpacity key={index} onPress={() => Linking.openURL(company.url)}>
                <Card style={styles.companyCard}>
                  <Card.Content>
                    <Text>Company: {company.name}</Text>
                    <Text>Role: {company.role}</Text>
                    <Text>CTC: {company.ctc}</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </Card.Content>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  blockButton: {
    marginTop: 10,
  },
  unblockButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
  },
  profileSection: {
    marginBottom: 20,
    elevation: 4,
  },
  profileContent: {
    paddingTop: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  appliedCompaniesSection: {
    elevation: 4,
  },
  companyCard: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default MA_studentProfile;