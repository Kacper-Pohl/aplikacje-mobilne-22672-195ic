import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import TextInput from './components/TextInput';
import PickerSelect from './components/PickerSelect';
import SwitchScr from './components/SwitchScr';
import ToastScr from './components/ToastScr';
import DttPick from './components/DatePicker';


const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TextInput" component={TextInput} />
          <Stack.Screen name="PickerSelect" component={PickerSelect} />
          <Stack.Screen name="SwitchScr" component={SwitchScr} />
          <Stack.Screen name="ToastScr" component={ToastScr} />
          <Stack.Screen name="DatePicker" component={DttPick} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;