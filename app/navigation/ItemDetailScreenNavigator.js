import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createStackNavigator();

function ItemDetailScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="ItemDetailScreen" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
}
  
export default ItemDetailScreenNavigator; 