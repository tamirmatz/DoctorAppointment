import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Splash from '../components/Splash';
import ScreenContainer from '../components/ScreenContainer';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { setIsSplashScreen } from '../store/slices/commonSlice';
import PhoneInput from '../components/PhoneInput';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { theme } from '../theme';
import { loginStyles } from '../styles/screens/loginStyes';
import Loader from '../components/Loader';
import { setClientAuth } from '../store/slices/authSlice';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const PHONE_LENGTH = 10;

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const isSplashScreen = useSelector((state: RootState) => state.common.isSplashScreen);

  const [phone, setPhone] = useState('');

  const onPressSendCode = () => {
    if(phone.length === PHONE_LENGTH){
      
      // Set Demo Data
        navigation.navigate('CodeLogin');
        dispatch(setClientAuth({clientName: 'טמיר', clientPhone: phone, isAuth: true}))
    }
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsSplashScreen(false));
    }, 2000);
  }, []);

  return (
    <ScreenContainer>
      {isSplashScreen ? (
        <Splash />
      ) : (
        <View style={loginStyles.container}>
          <Text style={loginStyles.welcomeText}>ברוכים הבאים!</Text>
          <Text style={loginStyles.instructionText}>
            כדי להתחבר למערכת זימון התורים, יש להקליד את מספר הטלפון וישלח אליכם קוד בSMS
          </Text>
          <PhoneInput phoneNumber={phone} setPhoneNumber={setPhone}/>
          <TouchableOpacity
            style={phone.length < PHONE_LENGTH ? loginStyles.disabledButton : loginStyles.button }
            onPress={onPressSendCode}
            disabled={phone.length < PHONE_LENGTH}  
          >
            <Text style={loginStyles.buttonText}>שלחו לי קוד</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScreenContainer>
  );
};

export default Login;
