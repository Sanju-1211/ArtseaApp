//import ProfileScreen from '../screens/ProfileScreen';
import React from 'react';
import { Platform, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import HomeScreenNavigator from './HomeScreenNavigator';
import AddItemScreenNavigator from './AddItemScreenNavigator';
import CartScreenNavigator from './CartScreenNavigator';
import OrderScreenNavigator from './OrderScreenNavigator';
import SellerProfileScreenNavigator from './SellerProfileScreenNavigator';
import BuyerProfileScreenNavigator from './BuyerProfileScreenNavigator';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const seller=false;

function AppNavigator() {
    return (
        <Tab.Navigator  screenOptions={({route}) => ({
                                        tabBarHideOnKeyboard: true,
                                        tabBarStyle: {
                                        backgroundColor: colors.tabBackground,
                                        height:40,
                                        },
                                        tabBarShowLabel: false,
                                        headerShown: false,
                                    })}>

        <Tab.Screen name="HomeScreen" 
                    component={HomeScreenNavigator}
                    options={{
                        tabBarIcon: ({focused}) => (
                        <View
                            style={{
                            top: Platform.OS === 'ios' ? 10 : 0,
                            }}>
                            <MaterialCommunityIcons name="home" size={24} color={colors.tabText} />
                        </View>
                        ),
                    }} 
                    />
        {
            seller ?
            <Tab.Screen name="+" 
                    component={AddItemScreenNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                        <View
                            style={{
                            top: Platform.OS === 'ios' ? 10 : 0,
                            }}>
                            
                            <AntDesign name="plussquareo" size={24} color={colors.tabText} />
                        </View>
                        ),
                    }} 
                    />
            :
            <Tab.Screen name="Cart" 
                    component={CartScreenNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                        <View
                            style={{
                            top: Platform.OS === 'ios' ? 10 : 0,
                            }}>
                            <MaterialCommunityIcons name="cart-variant" size={24} color={colors.tabText} />
                        </View>
                        ),
                    }} 
                    />            
        }

        <Tab.Screen name="Order" 
                    component={OrderScreenNavigator} 
                    options={{
                        tabBarIcon: ({focused}) => (
                        <View
                            style={{
                            top: Platform.OS === 'ios' ? 10 : 0,
                            }}>
                            <FontAwesome name="reorder" size={24} color={colors.tabText} />
                        </View>
                        ),
                    }} 
                    />  
        {
            seller ?                
            <Tab.Screen name="SellerProfile" 
                        component={SellerProfileScreenNavigator} 
                        options={{
                            tabBarIcon: ({focused}) => (
                            <View
                                style={{
                                top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Ionicons name="person-circle" size={24} color={colors.tabText} />
                            </View>
                            ),
                        }} 
                        />  
            :
            <Tab.Screen name="BuyerProfile" 
                        component={BuyerProfileScreenNavigator} 
                        options={{
                            tabBarIcon: ({focused}) => (
                            <View
                                style={{
                                top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Ionicons name="person-circle" size={24} color={colors.tabText} />
                            </View>
                            ),
                        }} 
                        />              
        }                     
        </Tab.Navigator>
        
    );
}

export default AppNavigator; 


