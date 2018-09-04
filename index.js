// Import a library to help create a component.

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlumniList from './src/components/AlumniList';

// Create a component.

const App = () => (
  <View>
    <Header headerText={'Alumni'} />
    <AlumniList />
  </View>
  );

// Render it to device.

AppRegistry.registerComponent('alumni', () => App);
