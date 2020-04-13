/* eslint-disable react/prop-types */
import React from 'react';

import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {setNavigator} from './services/navigationService';

import Dashboard from './pages/New/Dashboard';
import Account from './pages/Profile/Account';
import SignIn from './pages/Profile/SignIn';
import SignUp from './pages/Profile/SignUp';
import Detail from './pages/New/Detail';
import SelectQuantity from './pages/New/SelectQuantity';
import Payment from './pages/New/Payment';

const Tab = createBottomTabNavigator();

FontAwesome.loadFont();

const Stack = createStackNavigator();

function StackDashboard({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: 'Detalhes',
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Voltar"
              color="#000"
            />
          ),
        }}
      />
      <Stack.Screen
        name="SelectQuantity"
        component={SelectQuantity}
        options={{
          headerTitle: 'Selecione quantidade',
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Voltar"
              color="#000"
            />
          ),
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTitle: 'Pagamento',
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Voltar"
              color="#000"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function StackAccount() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer ref={setNavigator}>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={StackDashboard}
          options={{
            tabBarLabel: 'Destaques',
            tabBarIcon: () => (
              <FontAwesome
                reverseColor
                name="home"
                color="#04f7f5"
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
                color="#04f7f5"
                type="font-awesome"
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
