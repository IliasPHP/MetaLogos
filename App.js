// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar  } from 'react-native';
import { Searchbar,Button } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar />
        <View  style={{ backgroundColor:'white'}}>
          <Searchbar
          placeholder={'search'}
          />
        </View>
        <View  style={{flex:1, padding:16, backgroundColor:'lightgrey',}}>  
          <Text>List</Text>
        </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({

});
