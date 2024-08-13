import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    content: {
      flex: 1, 
      display: 'flex'
    },
    calendar: {
      borderRadius: 7,
      padding: 5,
    },
    timeContainer: {
      marginTop: 20,
    },
    headLineText: {
      fontSize: 24,
      marginBottom: 10,
      fontWeight: 'bold',
      color: theme.color.blue
    },
    dateText: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
      color: theme.color.blue
    },
    timeSlotContainer: {
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      display: 'flex',
      alignItems: 'center'
    },
    appointmentSetButton: {
      backgroundColor: theme.color.blue,
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    appointmentSetDisabledButton: {
      backgroundColor: theme.color.blue,
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      opacity: 0.5
      },
    appointmentSetButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    appointmentSetSuccessContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    appointmentSetSuccessTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.color.blue
    },
    appointmentSetSuccessDetails: {
      marginTop: 15,
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.color.blue
    },
    image: {
      height: 200, 
      resizeMode: 'cover', 
      margin: 20
    },
   
  });