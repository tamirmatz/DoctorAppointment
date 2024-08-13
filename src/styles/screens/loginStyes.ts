import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const loginStyles = StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    },
    welcomeText: {
      fontSize: 24,
      color: '#494949',
      fontWeight: 'bold'
    },
    instructionText: {
      fontSize: 18,
      color: '#494949',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      fontWeight: 'bold'
    },
    linkText: {
      color: theme.color.blue,  
      textDecorationLine: 'underline',
      fontSize: 18,
  
    },
    button: {
      backgroundColor: theme.color.pink,
      width: 230,
      height: 48,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      elevation: 6
    },
    disabledButton: {
      backgroundColor: theme.color.pink,  
      width: 230,
      height: 48,
      borderRadius: 30,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      elevation: 0,  
      opacity: 0.5  
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '600',
    },
    codeLoginContainer: { 
        display: 'flex',
        alignItems: 'center',
        marginTop: 20 
    },
    optContainer: {
        display: 'flex',
        alignItems: 'center'
    }
  });