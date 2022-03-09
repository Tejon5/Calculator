import React from 'react';
import { SafeAreaView, Text, View, StatusBar, StyleSheet } from 'react-native';
import CalculatorScreen from  './src/screens/CalculatorScreen';
import { styles } from './src/themes/appThemes';


export default function App() {
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar backgroundColor={'gold'} barStyle={'dark-content'}/>
            <CalculatorScreen/>
    </SafeAreaView>
  );
}

