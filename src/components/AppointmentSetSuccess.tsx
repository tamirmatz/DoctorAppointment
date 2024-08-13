import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/screens/appointmentsStyles';
import { convertDateFormat } from '../utils';

interface AppointmentSetSuccessProps {
  selectedDate: string | null;
  timeSelected: string | null;
}

const AppointmentSetSuccess: React.FC<AppointmentSetSuccessProps> = ({selectedDate, timeSelected}) => {

  return (
    <View style={styles.appointmentSetSuccessContainer}>
    <Text style={styles.appointmentSetSuccessTitle}>תור נקבע בהצלחה!</Text>
    <Image style={styles.image}
     resizeMode="contain" 
     source={require('../assets/success.png')}  />
    {selectedDate && <Text style={styles.appointmentSetSuccessDetails}>תור נקבע לתאריך {convertDateFormat(selectedDate)}</Text>}
    {selectedDate && <Text style={styles.appointmentSetSuccessDetails}>בשעה {timeSelected}</Text>}
  </View>
  );
};

export default AppointmentSetSuccess;
