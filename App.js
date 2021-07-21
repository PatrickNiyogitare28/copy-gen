import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation';

export default function App() {
  return (
    // <View style={styles.container}>
      // <Text>Hello</Text>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40
  },
});
