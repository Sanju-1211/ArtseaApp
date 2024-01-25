import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreenNavigator from './app/navigation/RegisterScreenNavigator';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreenNavigator from './app/navigation/LoginScreenNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function WelcomeScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreenNavigator} />
          <Stack.Screen name="Register" component={RegisterScreenNavigator} />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <WelcomeScreenNavigator/>   
    </NavigationContainer>
  );
}


