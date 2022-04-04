import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import UseState from './components/UseState';
import RestParameters from './components/RestParameters';
import SpreadOperator from './components/SpreadOperator';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HookUseState" component={UseState} />
          <Stack.Screen name="RestParameters" component={RestParameters} />
          <Stack.Screen name="SpreadOperator" component={SpreadOperator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

