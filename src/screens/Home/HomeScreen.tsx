import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text onPress={() => navigation.navigate('Info')}>Go to Info</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
