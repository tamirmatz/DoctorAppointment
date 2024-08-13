import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/components/timeSlotStyles';

type TimeSlotProps = {
  item: string;
  setTimeSelected: Dispatch<SetStateAction<string | null>>;
  timeSelected: string | null;
};

export const TimeSlot: React.FC<TimeSlotProps> = ({ item, setTimeSelected, timeSelected }) => {
  const isSelected = timeSelected === item;

  const handlePress = () => {
    setTimeSelected(item);
  };

  return (
    <TouchableOpacity
      style={[styles.timeSlot, isSelected && styles.selectedTimeSlot]}
      onPress={handlePress}
    >
      <Text style={[styles.timeText, isSelected && styles.selectedTimeText]}>{item}</Text>
    </TouchableOpacity>
  );
};


