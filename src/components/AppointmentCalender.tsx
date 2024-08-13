import React from 'react';
import { styles } from '../styles/screens/appointmentsStyles';
import { DateObject } from '../utils';
import { Calendar } from 'react-native-calendars';

interface AppointmentCalenderProps {
  todayString: string;
  maxDateString: string;
  markedDates: any;
  setSelectedDate:  (value: React.SetStateAction<string | null>) => void;
  selectedDate: string | null;
}

const AppointmentCalender: React.FC<AppointmentCalenderProps> = ({todayString, maxDateString, markedDates, setSelectedDate, selectedDate}) => {

  return (
    <Calendar
              style={styles.calendar}
              initialDate={todayString}
              minDate={todayString}
              maxDate={maxDateString}
              onDayPress={(day: DateObject) => setSelectedDate(day.dateString)}
              markedDates={{
                ...markedDates,
                [selectedDate || '']: { selected: true },
              }}
            />
  );
};

export default AppointmentCalender;
