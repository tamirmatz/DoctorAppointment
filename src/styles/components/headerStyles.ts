import { theme } from "../../theme";
import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: 64,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      ...Platform.select({
          ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
          },
          android: {
            elevation: 10,
          },
        }),
    
    },
    title: {
      color: theme.color.blue,
      fontSize: 20,
      fontWeight: 'bold',
    },
    logo: {
      height: 40, 
      aspectRatio: 1,  
    },
    sideWrapper: {
      width: 40
    }
  
  });