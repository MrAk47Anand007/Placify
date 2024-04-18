// import React from "react";
// import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
// import Colors from "../../constants/Colors";
// import Spacing from "../../constants/Spacing";
// import FontSize from "../../constants/FontSize";

// const MA_JobDetails = ({}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={require("../../assets/images/female.png")}
//             style={styles.image}
//             resizeMode="cover"
//           />
//         </View>
//         <Text style={styles.text}>Alpha Level</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//     position: "relative",
//   },
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: Spacing.large,
//     paddingVertical: Spacing.medium,
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.borderWithOpacity,
//     backgroundColor: Colors.background,
//   },
//   imageContainer: {
//     width: 50, // Adjust the width of the square box as needed
//     height: 50, // Adjust the height of the square box as needed
//     marginRight: Spacing.medium,
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   text: {
//     fontSize: FontSize.medium,
//     color: Colors.text,
//   },
// });

// export default MA_JobDetails;








import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";

const MA_JobDetails = ({}) => {
  const descriptionText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";

  const selectionProcessText = "1. HR round\n2. Online Assessment\n3. Interview I\n4. Interview II";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.heading}>Employment Type</Text>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>Full-time</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>CTC</Text>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>Rs. 10,00,000</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Location</Text>
          <View style={styles.locationContainer}>
            <View style={styles.locationRectangle}>
              <Text style={styles.locationText}>Pune</Text>
            </View>
            <View style={styles.locationRectangle}>
              <Text style={styles.locationText}>Mumbai</Text>
            </View>
            <View style={styles.locationRectangle}>
              <Text style={styles.locationText}>Delhi</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Description</Text>
          <View style={styles.descriptionRectangle}>
            <Text style={styles.descriptionText}>{descriptionText}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Selection Process</Text>
          <View style={styles.processRectangle}>
            <Text style={styles.processText}>{selectionProcessText}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Edit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContent: {
    paddingHorizontal: Spacing.large,
    paddingBottom: Spacing.large,
  },
  content: {
    marginBottom: Spacing.large,
  },
  heading: {
    fontSize: FontSize.xxLarge,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: Spacing.small,
  },
  rectangle: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.small,
  },
  rectangleText: {
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: Spacing.small,
  },
  locationRectangle: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingHorizontal: Spacing.medium,
    paddingVertical: Spacing.small,
    marginRight: Spacing.medium,
  },
  locationText: {
    color: Colors.onPrimary,
    fontSize: FontSize.medium,
  },
  descriptionRectangle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: Spacing.medium,
    marginTop: Spacing.small,
  },
  descriptionText: {
    fontSize: FontSize.medium,
    color: Colors.text,
  },
  processRectangle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: Spacing.medium,
    marginTop: Spacing.small,
  },
  processText: {
    fontSize: FontSize.medium,
    color: Colors.text,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: Spacing.medium,
    alignItems: "center",
    marginTop: Spacing.large,
  },
  applyButtonText: {
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    fontWeight: "bold",
  },
});

export default MA_JobDetails;

