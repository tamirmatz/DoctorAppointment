import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { styles } from '../styles/components/phoneInputStyles';

interface PhoneInputProps {
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ phoneNumber, setPhoneNumber }) => {
  const MAX_PHONE_LENGTH = 10;

  const handleTextChange = (text: string) => {
    // Remove any non-digit characters
    let formattedText = text.replace(/\D/g, '');

    // Ensure the phone number starts with '05'
    if (!formattedText.startsWith('05')) {
      formattedText = '05' + formattedText.slice(2);
    }

    // Enforce length constraints
    if (formattedText.length <= MAX_PHONE_LENGTH) {
      setPhoneNumber(formattedText);
    }
  };

  useEffect(() => {
    setPhoneNumber('05')
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handleTextChange}
        maxLength={MAX_PHONE_LENGTH}
      />
    </View>
  );
};

export default PhoneInput;
