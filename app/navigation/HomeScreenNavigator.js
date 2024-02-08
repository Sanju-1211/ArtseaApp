import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ArtisanScreenNavigator from './ArtisanScreenNavigator';
import SearchScreenNavigator from './SearchScreenNavigator';
import ItemDetailScreenNavigator from './ItemDetailScreenNavigator';

const Stack = createStackNavigator();

function HomeScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ArtisanDetail" component={ArtisanScreenNavigator} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreenNavigator} />
          <Stack.Screen name="Search" component={SearchScreenNavigator} />
        </Stack.Navigator>
    );
}
  
export default HomeScreenNavigator; 