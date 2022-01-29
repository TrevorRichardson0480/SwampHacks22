import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Home from "./Home.js"
//import './App.css';

export default function App() {
  return (
      <View style={styles.container}>
        <Home>
        </Home>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045B62',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
