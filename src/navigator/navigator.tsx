/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Dimensions, SafeAreaView} from 'react-native';
import {screenOptions} from '../constants/utils';
import TabBar from '../components/Tabbar/Tabbar';
import DashboardTabScreen from '../screens/DashboardTabScreen';
import WatchTabScreen from '../screens/WatchTabScreen';
import MediaLibraryTabScreen from '../screens/MediaLibraryTabScreen';
import MoreTabScreen from '../screens/MoreTabScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import GetTicketsScreen from '../screens/GetTicketsScreen';
import SelectSeatScreen from '../screens/SelectSeatScreen';
import VideoPlayerScreen from '../screens/VideoPlayer';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();

function RootNavigator() {
  const Tab = createBottomTabNavigator();

  function HomeTabs() {
    return (
      <SafeAreaView style={{width, height}}>
        <Tab.Navigator
          initialRouteName={'watchTabScreen'}
          screenOptions={screenOptions}
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen
            name="dashboardTabScreen"
            component={DashboardTabScreen}
          />
          <Tab.Screen name="watchTabScreen" component={WatchTabScreen} />
          <Tab.Screen
            name="mediaLibraryTabScreen"
            component={MediaLibraryTabScreen}
          />
          <Tab.Screen name="MoreTabScreen" component={MoreTabScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'HomeTabs'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MovieDetailScreen" component={MovieDetailsScreen} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
        <Stack.Screen name="GetTicketsScreen" component={GetTicketsScreen} />
        <Stack.Screen name="SelectSeatScreen" component={SelectSeatScreen} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
