import React from 'react';
import {AppRegistry} from 'react-native';
import RootNavigator from './navigator/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent('AutoConnect', () => App);
