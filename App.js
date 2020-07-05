import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import firebase from './src/utils/firebase';
import 'firebase/auth';

export default function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      console.log(response);
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>Juana Guicel</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  prueba: {
    backgroundColor: 'red',
  },
});
