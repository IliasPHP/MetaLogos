// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar />
        <View  style={{ padding:16, backgroundColor:'green',}}>  
          <Text>Search</Text>
        </View>
        <View  style={{flex:1, padding:16, backgroundColor:'lightgrey',}}>  
          <Text>List</Text>
        </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({

});
