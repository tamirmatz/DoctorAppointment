import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { styles } from '../styles/components/loaderStyles';

type LoaderProps = {
  visible: boolean;
  size?: 'small' | 'large';
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ visible, size = 'large', color = '#00adf5' }) => {
  if (!visible) return null;

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
