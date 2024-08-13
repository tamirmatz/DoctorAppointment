import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { styles } from '../styles/components/optInputStyles';

interface OTPInputProps {
  codeLength: number;
  onCodeFilled: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ codeLength, onCodeFilled }) => {
  const [otp, setOtp] = useState<string[]>(Array(codeLength).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // If the user deletes the input, focus on the previous input field
    if (text === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    } else if (text.length === 1 && index < codeLength - 1) {
      inputs.current[index + 1]?.focus();
    }

    // If the OTP is completely filled, call the onCodeFilled function
    if (newOtp.join('').length === codeLength) {
      onCodeFilled(newOtp.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(codeLength)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            value={otp[index]}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={index === 0}
          />
        ))}
    </View>
  );
};


export default OTPInput;
