import React from 'react';
import { StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestautantInfoCard } from '../components/restaurant-info-card.component';

/**
 * STYLES
 */

const SafeAera = styled(SafeAreaView)`
  flex: 1;
`;
const StyledViewBar = styled.View`
  padding: ${(props) => props.theme.space[1]};
  background: ${(props) => props.theme.colors.bg.primary};
`;
const StyledViewRest = styled.View`
  background: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
