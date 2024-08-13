import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setCurrentField } from '../store/slices/appointmentsSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../App';
import { theme } from '../theme';
import { styles } from '../styles/components/fieldStyles';

interface FieldProps {
  name: string;
  fieldId: number;
}

type AppointmentsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Appointments'>;

const Field: React.FC<FieldProps> = ({ name, fieldId }) => {

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<AppointmentsScreenNavigationProp>();

  const onPressField = () => {
    dispatch(setCurrentField({name, id: fieldId}))
    navigation.navigate('Appointments')
  }

  return (
    <TouchableOpacity onPress={onPressField} style={styles.field}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Field;
