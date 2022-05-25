import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import FirstScroll from './components/FirstScroll';
import SecondScroll from './components/SecondScroll';
import SwipeScreen from './components/SwipeScreen';
import TouchableScreen from './components/TouchableScreen';


const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FirstScroll" component={FirstScroll} />
          <Stack.Screen name="SecondScroll" component={SecondScroll} />
          <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
          <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;