import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import ItemDetailScreenNavigator from './ItemDetailScreenNavigator';

const Stack = createStackNavigator();

function CartScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="CartScreen" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreenNavigator} />
        </Stack.Navigator>
    );
}
  
export default CartScreenNavigator; 