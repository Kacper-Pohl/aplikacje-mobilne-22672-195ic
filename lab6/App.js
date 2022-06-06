import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import ImageScreen from './components/ImageScreen';
import ResizeImageScreen from './components/ResizeImageScreen';
import LazyIconsScreen from './components/LazyIconsScreen';
import ConnectionScreen from './components/ConnectionScreen';
import AsyncStorageScreen from './components/AsyncStorageScreen';
import SyncScreen from './components/SyncScreen';


const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
          <Stack.Screen name="ResizeImageScreen" component={ResizeImageScreen} />
          <Stack.Screen name="LazyIconsScreen" component={LazyIconsScreen} />
          <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
          <Stack.Screen name="AsyncStorageScreen" component={AsyncStorageScreen} />
          <Stack.Screen name="SyncScreen" component={SyncScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

