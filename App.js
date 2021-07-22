import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './navigation';

export default function App() {
  return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  },
});
