// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/intrastructure/theme/index';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
