// 👇 Estas dos importaciones DEBEN ir primero
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './page/inicio';
import Info_1 from './page/info_1';
import Info_2 from './page/info_2';
import Info_3 from './page/info_3';
import Main from './page/main';
import PagConcejos from './component/pag_concejos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Info_1" component={Info_1} options={{ headerShown: false }} />
        <Stack.Screen name="Info_2" component={Info_2} options={{ headerShown: false }} />
        <Stack.Screen name="Info_3" component={Info_3} options={{ headerShown: false }} />
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="PagConcejos" component={PagConcejos} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
