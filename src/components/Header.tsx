import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { theme } from '../theme';
import { styles } from '../styles/components/headerStyles';

const Header: React.FC<{ title: string, isBack: boolean }> = ({ title, isBack }) => {
  const navigation = useNavigation();
  const isSplashScreen = useSelector((state: RootState) => state.common.isSplashScreen);

  return (
    <>{ isSplashScreen ? null :
        <View style={styles.container}>
           {isBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sideWrapper}>
              <Text style={styles.title}>&larr;</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.sideWrapper} />
          )}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.sideWrapper}>
            <Image
             style={styles.logo}
             resizeMode="contain" 
             source={require('../assets/SHEBA_LOGO.png')}  />
          </View>
            
        </View>
        }      
    </>
  );
};

export default Header;
