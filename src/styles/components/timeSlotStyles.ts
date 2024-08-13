import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  timeSlot: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 7,
    width: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.color.pink,
    borderWidth: 2,
    margin: 5
  },
  selectedTimeSlot: {
    backgroundColor: theme.color.pink,
  },
  timeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectedTimeText: {
    color: '#fff',
  },
});