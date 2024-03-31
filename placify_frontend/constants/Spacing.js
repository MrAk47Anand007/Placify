// import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

// const Spacing = responsiveWidth(2.3); // Adjust this multiplier as needed

// export default Spacing;




import { responsiveHeight } from 'react-native-responsive-dimensions';

// Calculate spacing based on device screen height
const screenHeight = 892; // Height of Pixel 6 Pro in dp
const Spacing = responsiveHeight(1) * (screenHeight / 892); // 1% of the screen height

export default Spacing;






// const Spacing = 10;

// export default Spacing;