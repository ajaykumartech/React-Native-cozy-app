import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../../screens/ProfileScreen';
import CartScreen from '../../screens/CartScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator
    initialRouteName="menu"
    activeColor="#e91e63"
    labelStyle={{ fontSize: 12 }}
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="menu"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ItemDetail"
      component={CartScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;