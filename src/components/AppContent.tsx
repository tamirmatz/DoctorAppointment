import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import RootNavigator from './RootNavigator';
import { ModalError } from './ErrorModal';

const AppContent: React.FC = () => {
    const commonModal = useSelector((state: RootState) => state.common.commonModal);
    const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
        <RootNavigator/>
        <ModalError  isVisible={commonModal.isVisible} text={commonModal.text} />
    </>
  );
};

export default AppContent;
