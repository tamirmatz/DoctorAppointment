import React from 'react';
import { Button, View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../App';
import OTPInput from '../components/OTPInput';
import { loginStyles } from '../styles/screens/loginStyes';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type CodeLoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CodeLogin'>;

const CodeLogin: React.FC = () => {
  const navigation = useNavigation<CodeLoginNavigationProp>();
  const clientPhone = useSelector((state: RootState) => state.auth.clientPhone);

  const handleCodeFilled = (code: string) => {
    navigation.navigate('Home');
  };

  const handleResendCode = () => {
    Alert.alert('קוד נשלח שוב', 'הקוד נשלח בהצלחה למספר 0545234280');
  };

  return (
    <View style={loginStyles.codeLoginContainer}>
      <Text style={loginStyles.welcomeText}>קוד נשלח למספר {clientPhone}</Text>
      <Text style={loginStyles.instructionText}>
        נא הקלידו את הקוד שקיבלתם, עברו מספר דקות ולא קיבלתם?{' '}
          <Text onPress={handleResendCode} style={loginStyles.linkText}>שלח שוב</Text>
      </Text>
      <View style={loginStyles.optContainer}>
        <OTPInput codeLength={4} onCodeFilled={handleCodeFilled} />
      </View>
    </View>
  );
};

export default CodeLogin;
