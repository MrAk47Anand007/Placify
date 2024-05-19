import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PieChart, BarChart, LineChart } from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

const data = {
  registeredStudents: 500,
  studentsByYear: { secondYear: 150, thirdYear: 200, fourthYear: 150 },
  companiesRegistered: 50,
  companiesVisited: 30,
  studentsPlaced: 300,
  packageDistribution: [
    { name: '3-5 LPA', count: 100 },
    { name: '5-7 LPA', count: 150 },
    { name: '7-10 LPA', count: 50 },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff', // Light background gradient start
  backgroundGradientTo: '#e0e0e0', // Light grey background gradient end
  color: (opacity = 1) => `rgba(34, 34, 34, ${opacity})`, // Dark grey color for chart elements
  strokeWidth: 2, // Optional: default is 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const HomePage = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.tileContainer}>
        <Animatable.View animation="fadeInUp" style={styles.tile}>
          <Ionicons name="school" size={32} color="#4CAF50" />
          <Text style={styles.tileTitle}>Total Registered Students</Text>
          <Text style={styles.tileValue}>{data.registeredStudents}</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.tile}>
          <Ionicons name="business" size={32} color="#2196F3" />
          <Text style={styles.tileTitle}>Companies Registered</Text>
          <Text style={styles.tileValue}>{data.companiesRegistered}</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.tile}>
          <Ionicons name="briefcase" size={32} color="#FF9800" />
          <Text style={styles.tileTitle}>Companies Visited</Text>
          <Text style={styles.tileValue}>{data.companiesVisited}</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.tile}>
          <Ionicons name="checkmark-done" size={32} color="#F44336" />
          <Text style={styles.tileTitle}>Students Placed</Text>
          <Text style={styles.tileValue}>{data.studentsPlaced}</Text>
        </Animatable.View>
      </View>

      <Animatable.View animation="fadeInUp" style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Students by Year</Text>
        <PieChart
          data={[
            { name: '2nd Year', population: data.studentsByYear.secondYear, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: '3rd Year', population: data.studentsByYear.thirdYear, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: '4th Year', population: data.studentsByYear.fourthYear, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
          ]}
          width={400}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Placement Trends Over Time</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // Line color
              },
            ],
          }}
          width={400}
          height={220}
          chartConfig={chartConfig}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Package Distribution</Text>
        <BarChart
          data={{
            labels: data.packageDistribution.map(item => item.name),
            datasets: [
              {
                data: data.packageDistribution.map(item => item.count),
                colors: [
                  (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                  (opacity = 1) => `rgba(54, 162, 235, ${opacity})`,
                  (opacity = 1) => `rgba(255, 206, 86, ${opacity})`,
                ],
              },
            ],
          }}
          width={400}
          height={220}
          chartConfig={chartConfig}
        />
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    paddingBottom: 150, // Add padding to the bottom to avoid overlap with bottom navigation
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tileTitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  tileValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  chartContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomePage;