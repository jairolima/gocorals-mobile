import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

FontAwesome.loadFont();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackDashboard() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Destaques" component={Dashboard} />
    </Stack.Navigator>
  );
}

function StackAccount() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Conta" component={Account} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
export default (signedIn = false) =>
  NavigationContainer(
    <Tab.Navigator initialRouteName={signedIn ? 'Account' : 'Dashboard'}>
      <Tab.Screen
        name="Dashboard"
        component={StackDashboard}
        options={{
          tabBarLabel: 'Destaques',
          tabBarIcon: () => (
            <FontAwesome
              reverseColor
              name="home"
              color="#3cf0c5"
              type="font-awesome"
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={StackAccount}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => (
            <FontAwesome
              reverseColor
              name="user"
              color="#3cf0c5"
              type="font-awesome"
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>,
  );
