import {RouteProp} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {CardAction, ListOfCards} from '@Screens';
import {colors} from '@Styles';
import {Card} from '@Type';
import {deepMemo} from '@Utils';
import React from 'react';

type RootParamList = {
  ListOfCards: undefined;
  CardAction: {
    item: Card;
    position: number;
  };
};

const Stack = createNativeStackNavigator<RootParamList>();

type RouteName = keyof RootParamList;

export interface NavigationScreenProps<T extends RouteName> {
  navigation: NativeStackNavigationProp<RootParamList, T>;
  route: RouteProp<RootParamList, T>;
}

const screenConfig: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  animation: 'fade',
  contentStyle: {
    backgroundColor: colors.TRANSPARENT,
  },
  presentation: 'transparentModal',
};

export const RootNavigation = deepMemo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'ListOfCards'}
        screenOptions={screenConfig}>
        <Stack.Screen name="ListOfCards" component={ListOfCards} />
        <Stack.Screen name="CardAction" component={CardAction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
