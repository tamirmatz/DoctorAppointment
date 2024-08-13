// components/ScreenContainer.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles/components/screenContainerStyle';
interface ScreenContainerProps {
  children: ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {children}
    </View>
  );
};

export default ScreenContainer;
