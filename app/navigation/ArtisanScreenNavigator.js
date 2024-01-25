import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ArtisanScreen from '../screens/ArtisanScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
const Stack = createStackNavigator();

function ArtisanScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="ArtisanDetailScreen" component={ArtisanScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
}
  
export default ArtisanScreenNavigator; 