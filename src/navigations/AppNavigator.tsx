import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {isAuth ? <MainNavigator /> : <AuthNavigator />}
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default AppNavigator;
