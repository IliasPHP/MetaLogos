import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestautantInfoCard } from '../components/restaurant-info-card.component';

/**
 * STYLES
 */

const SafeAera = styled.SafeAreaView`
  flex: 1;
`;
const StyledViewBar = styled.View`
  padding: 7px;
  background: #fff;
`;
const StyledViewRest = styled.View`
  background: lightgrey;
  flex: 1;
  padding: 16px;
`;

/**/

const isAndroid = Platform.OS === 'android';
export const RestaurantScreen = () => {
  return (
    <SafeAera>
      <StatusBar />
      <StyledViewBar>
        <Searchbar placeholder={'search'} />
      </StyledViewBar>
      <StyledViewRest>
        <RestautantInfoCard />
      </StyledViewRest>
    </SafeAera>
  );
};
const styles = StyleSheet.create({});
