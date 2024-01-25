import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchedItemScreen from '../screens/SearchedItemsScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createStackNavigator();

function SearchedItemsScreenNavigator() {
    return (
        <Stack.Navigator initialRouteName="SearchedItemsScreen" screenOptions={{headerShown:false}}>      
          <Stack.Screen name="SearchedItemsScreen" component={SearchedItemScreen} />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    );
}

export default SearchedItemsScreenNavigator; 