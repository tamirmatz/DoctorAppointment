// screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import {  View, Text, ScrollView, Dimensions } from 'react-native';
import { GetMockFields } from '../api';
import Field from '../components/Field';
import Loader from '../components/Loader';
import { loginStyles } from '../styles/screens/loginStyes';
import { styles } from '../styles/screens/homeStyles';

const Home: React.FC = () => {

  const [fields, setFields] = useState<{ id: number; name: string }[]>([]); 
  const [loading, setLoading] = useState(true);

  const screenHeight = Dimensions.get('window').height;
  const heightOfElemnts = 250;
  const scrollViewHeight = screenHeight - heightOfElemnts;

  useEffect(() => {
    GetMockFields().then((data) => {
      setFields(data);
      setLoading(false);
    });
  }, []);


  return (
    <View>
      <Loader visible={loading} />
      <View>
        <View style={styles.headerContainer}>
          <Text style={loginStyles.welcomeText}>שלום, טמיר</Text>
          <Text style={loginStyles.instructionText}>אנא בחר את תחום השירות המבוקש</Text>
        </View>
        <ScrollView style={[styles.scrollView, { height: scrollViewHeight }]}>
          <View style={styles.fieldsContainer}>
            {fields.map((field) => (
              <Field
                key={field.id}
                name={field.name}
                fieldId={field.id}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;