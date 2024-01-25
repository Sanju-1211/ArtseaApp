import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreenNavigator from './LandingScreenNavigator';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

function RegisterScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="RegisterScreen" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="App" component={LandingScreenNavigator} />
        </Stack.Navigator>
    );
}
  
export default RegisterScreenNavigator; 