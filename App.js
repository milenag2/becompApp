import 'react-native-gesture-handler';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pesquisar from './screens/pesquisar/App';
import Favoritos from './screens/favoritos/App';
import Settings from './screens/settings/App';
import Inicio from './screens/inicio/App';
import { BlurView } from 'expo-blur';
import { ImageBackground, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

function InicioScreen(){
  return(
    <Inicio/>
  )
}

const PesquisarScreen = () => {
  return(
    <Pesquisar/>
  )
}

const FavoritosScreen = () => {
  return(
    <Favoritos/>
  )
}

const SettingsScreen = () => {
  return(
    <Settings/>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator vinitialRouteName="Player"
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { position: 'absolute' , backgroundColor:'black'},
    })}>
      <Tab.Screen name="Inicio" component={InicioScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'home':'home'} size={size} color={color} />
          )}} />
      <Tab.Screen name="Pesquisar" component={PesquisarScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'search':'search'} size={size} color={color} />
          )}}/>
      <Tab.Screen name="Favoritos" component={FavoritosScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <AntDesign name={focused ? 'star':'staro'} size={size} color={color} />
          )}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon:({ focused, color, size }) => (
          <Feather name={focused ? 'settings':'settings'} size={size} color={color} />
          )}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
  <NavigationContainer>
      <MyTabs />
  </NavigationContainer>
  )
}