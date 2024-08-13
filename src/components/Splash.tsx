// screens/HomeScreen.tsx
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { styles } from '../styles/components/splashStyles';


const Splash: React.FC = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.image}
        resizeMode="contain" 
        source={require('../assets/SHEBA_LOGO.png')}  />
    </View>
  );
};


export default Splash;