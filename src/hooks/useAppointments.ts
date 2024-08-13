import { useState, useEffect, useMemo, useCallback } from 'react';
import { getFieldAppointments } from '../api';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setCommonModal } from '../store/slices/commonSlice';

type AppointmentsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Appointments'>;

export const useAppointments = (fieldId: number | undefined) => {

  const navigation = useNavigation<AppointmentsNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const [appointments, setAppointments] = useState<{ date: string; times: string[] }[]>([]);
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);
  const [timeSelected, setTimeSelected] = useState<null | string>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isAppointmentSet, setIsAppointmentSet] = useState<boolean>(false);

  const today = useMemo(() => new Date(), []);
  const maxDate = useMemo(() => {
    const date = new Date(today);
    date.setDate(today.getDate() + 30);
    return date;
  }, [today]);

  const todayString = useMemo(() => today.toISOString().split('T')[0], [today]);
  const maxDateString = useMemo(() => maxDate.toISOString().split('T')[0], [maxDate]);

  const fetchAppointments = useCallback(async () => {
    if (!fieldId) return;

    try {
      const data = await getFieldAppointments(fieldId);
      if (data && data.length > 0) {
        setAppointments(data);
        const marked = data.reduce((acc, appointment) => {
          acc[appointment.date] = { marked: true };
          return acc;
        }, {} as { [key: string]: any });

        for (let date = new Date(today); date <= maxDate; date.setDate(date.getDate() + 1)) {
          const dateString = date.toISOString().split('T')[0];
          if (!marked[dateString]) {
            marked[dateString] = { disabled: true, disableTouchEvent: true };
          }
        }

        setMarkedDates(marked);
        // Logic to find the closest date with available appointments
        let closestDate: string | null = null;

        for (const appointment of data) {
          const appointmentDate = new Date(appointment.date);
          
          if (appointmentDate >= today && appointmentDate <= maxDate) {
            closestDate = appointment.date;
            break;
          }
        }

        if (closestDate) {
          setSelectedDate(closestDate);
        }
      }
    } catch (error) {
      dispatch(setCommonModal({btn: 'סגור', isVisible: true, title: 'לא קיימים תורים לתחום זה', subTitle: 'אנא נסה שוב מאוחר יותר'}))
      navigation.navigate('Home');
    } finally {
      setLoading(false);
    }
  }, [fieldId, today, maxDate, todayString]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const getTimesForSelectedDate = useMemo(() => {
    const appointment = appointments.find(app => app.date === selectedDate);
    return appointment ? appointment.times : [];
  }, [appointments, selectedDate]);

  return {
    loading,
    appointments,
    markedDates,
    selectedDate,
    setSelectedDate,
    setTimeSelected,
    todayString,
    maxDateString,
    getTimesForSelectedDate,
    timeSelected,
    setIsAppointmentSet,
    isAppointmentSet,
    setLoading
  };
};
