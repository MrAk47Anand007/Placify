
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, Button, Paragraph, Title } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

const CompanyDetailsPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [offerGiven, setOfferGiven] = useState(false);

  // Placeholder data for company details
  const companyDetails = {
    name: 'Tech Innovations Inc.',
    role: 'Software Engineer',
    ctc: '12 LPA',
    location: 'San Francisco, CA',
    joiningDate: '01/07/2024',
    jobDescription: 'Involved in developing and designing software solutions...',
  };

  const handleOfferGiven = () => {
    setOfferGiven(true);
    // Reset after animation
    setTimeout(() => setOfferGiven(false), 3000); // Adjust time as needed
  };

  const handleRevokeOffer = () => {
    setOfferGiven(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View animation="fadeIn" duration={1500} style={styles.headerContainer}>
        <Title style={styles.header}>Company Details</Title>
      </Animatable.View>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.paragraph}>Name: {companyDetails.name}</Paragraph>
          <Paragraph style={styles.paragraph}>Role: {companyDetails.role}</Paragraph>
          <Paragraph style={styles.paragraph}>CTC: {companyDetails.ctc}</Paragraph>
          {showMore && (
            <>
              <Paragraph style={styles.paragraph}>Location: {companyDetails.location}</Paragraph>
              <Paragraph style={styles.paragraph}>Joining Date: {companyDetails.joiningDate}</Paragraph>
              <Paragraph style={styles.paragraph}>Job Description: {companyDetails.jobDescription}</Paragraph>
            </>
          )}
          <Button mode="text" onPress={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </Card.Content>
      </Card>

      {offerGiven ? (
        <Button icon="close" mode="contained" onPress={handleRevokeOffer} style={styles.revokeButton}>
          Revoke Offer
        </Button>
      ) : (
        <Button icon="star" mode="contained" onPress={handleOfferGiven} style={styles.offerButton}>
          Offer Given
        </Button>
      )}

      {offerGiven && (
        <Animatable.View animation="bounceIn" duration={1500} style={styles.celebrationContainer}>
          <Animatable.Image
            source={require('../../assets/images/Celebration.gif')} // Replace with your celebration image path
            iterationCount="infinite"
            duration={3000}
            style={styles.celebrationImage}
          />
          <Text style={styles.celebrationText}>Offer Accepted!</Text>
        </Animatable.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    marginBottom: 20,
    elevation: 4,
  },
  paragraph: {
    marginBottom: 10,
  },
  offerButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50', // Change as per your theme
  },
  revokeButton: {
    marginTop: 20,
    backgroundColor: '#FF5722', // Change as per your theme
  },
  celebrationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  celebrationImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  celebrationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CompanyDetailsPage;