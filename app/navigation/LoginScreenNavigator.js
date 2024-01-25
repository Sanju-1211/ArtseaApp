import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LandingScreenNavigator from './LandingScreenNavigator';

const Stack = createStackNavigator();

function LoginScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="App" component={LandingScreenNavigator} />
        </Stack.Navigator>
    );
}
  
export default LoginScreenNavigator; 