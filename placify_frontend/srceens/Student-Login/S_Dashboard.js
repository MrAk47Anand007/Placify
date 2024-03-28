

import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";

const S_Dashboard = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300' }} // Adjusted image URL for the bigger size
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns content to the start
    alignItems: 'center',
    paddingTop: '18%', // Pushes the circle to the upper half, adjust as needed
  },
  circle: {
    width: Spacing * 36, // Tripled size
    height: Spacing * 36, // Tripled size
    borderRadius: Spacing * 18, // Half of the new width/height to maintain the circle shape
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 25,
  },
  profileImage: {
    width: '93%', // Ensures the image fills the container
    height: '93%', // Ensures the image fills the container
    borderRadius: 180, // Makes the image circular, matching the circle's border radius
  },
});

export default S_Dashboard;