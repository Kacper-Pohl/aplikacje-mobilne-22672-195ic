import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Sort from './components/Sort';
import LazyLoad from './components/LazyLoad';
import StepProg from './components/StepProg';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sort" component={Sort} />
          <Stack.Screen name="LazyLoad" component={LazyLoad} />
          <Stack.Screen name="StepProg" component={StepProg} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


