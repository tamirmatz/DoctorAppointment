import React from 'react';
import { styles } from '../styles/screens/appointmentsStyles';
import { DateObject } from '../utils';
import { Calendar } from 'react-native-calendars';
import { FlatList } from 'react-native';
import { TimeSlot } from './TimeSlot';

interface AppointmentTimeSectionProps {
  timeSelected: string | null;
  setTimeSelected: (value: React.SetStateAction<string | null>) => void;
  getTimesForSelectedDate: string[];
}

const AppointmentTimeSection: React.FC<AppointmentTimeSectionProps> = ({timeSelected, setTimeSelected, getTimesForSelectedDate}) => {

  return (
    <FlatList
      data={getTimesForSelectedDate}
      renderItem={({ item }) => <TimeSlot setTimeSelected={setTimeSelected} timeSelected={timeSelected} item={item} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      contentContainerStyle={styles.timeSlotContainer}
    />
  );
};

export default AppointmentTimeSection;
