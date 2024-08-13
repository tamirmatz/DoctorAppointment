import { theme } from "../../theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    field: {
      width: '80%',
      borderColor: theme.color.green,
      borderWidth: 2,
      borderRadius: 8,
      height: 50,
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.color.green,
    }
  });