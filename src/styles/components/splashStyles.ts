import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // You can change the background color if needed
  },
  image: {
    width: Dimensions.get('window').width, // Make image cover full width
    height: 200, // Make image cover full height
    resizeMode: 'cover', // Ensure the image covers the whole screen
  },
});