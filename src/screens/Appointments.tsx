import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { RootState } from '../store/store';
import { TimeSlot } from '../components/TimeSlot';
import { useAppointments } from '../hooks/useAppointments';
import { convertDateFormat, DateObject } from '../utils';
import { theme } from '../theme';
import { styles } from '../styles/screens/appointmentsStyles';
import AppointmentSetSuccess from '../components/AppointmentSetSuccess';
import AppointmentCalender from '../components/AppointmentCalender';
import AppointmentTimeSection from '../components/AppointmentTimeSection';


const Appointments: React.FC = () => {
  const field = useSelector((state: RootState) => state.appointments.currentField);
  const {
    loading,
    markedDates,
    selectedDate,
    setSelectedDate,
    todayString,
    maxDateString,
    getTimesForSelectedDate,
    setTimeSelected,
    timeSelected,
    isAppointmentSet,
    setIsAppointmentSet,
    setLoading
  } = useAppointments(field?.id);

  const handleAppointmentSet = () => {
    setIsAppointmentSet(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000); 
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      {!loading && (
        <>
         { !isAppointmentSet ? <>
          <View style={styles.content}>
            <AppointmentCalender markedDates={markedDates} maxDateString={maxDateString} selectedDate={selectedDate} setSelectedDate={setSelectedDate} todayString={todayString}/>
              {selectedDate && (
                <View style={styles.timeContainer}>
                  <Text style={styles.headLineText}>{field?.name}</Text>
                  <Text style={styles.dateText}>תורים פנויים ב-{convertDateFormat(selectedDate)}:</Text>
                  <AppointmentTimeSection getTimesForSelectedDate={getTimesForSelectedDate} setTimeSelected={setTimeSelected} timeSelected={timeSelected}/>
                </View>
              )}
          </View>
          <TouchableOpacity disabled={!timeSelected} style={timeSelected ? styles.appointmentSetButton : styles.appointmentSetDisabledButton} onPress={handleAppointmentSet}>
            <Text style={ styles.appointmentSetButtonText}>קבע תור</Text>
          </TouchableOpacity>
         </> : <AppointmentSetSuccess selectedDate={selectedDate} timeSelected={timeSelected}/> }
        </>
      )}
    </View>
  );
};

export default Appointments;
