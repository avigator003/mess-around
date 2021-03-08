import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useEffect, useState} from 'react';
import { ColorSchemeName } from 'react-native';
import Account from '../screens/Account/Account';
import AuthenticationContainer from '../screens/Authentication/AuthenticationContainer';
import NotFoundScreen from '../screens/Home/Home';
import TabOneScreen from '../screens/QRCode/QrCodeGenerator';
import { RootStackParamList,AuthenticationStackParamList, AuthenticationLoadingStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerNavigator/DrawerContent';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import {useSelector} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { createSwitchNavigator} from 'react-navigation';
import { ActivityIndicator } from 'react-native-paper';
import { View } from '../components/Themed';
import AuthenticationLoading from '../screens/Authentication/AuthenticationLoading';
const Drawer = createDrawerNavigator();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName },props:any) {
   
  const[user,setUser]=useState()
  
  useEffect(()=>{
     const getUser=async()=>{
     const currentUser=await AsyncStorage.getItem("user")
     console.log(currentUser,"user")
     if(currentUser===null)
      props.navigation.navigate("Auth")
     else
      props.navigation.navigate("Root")
   }
   getUser()
  },[])

 return (
    <NavigationContainer 
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        
         <RootNavigator  />
        
      </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

export  function RootNavigator(props:any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="AuthenticationContainer" component={AuthenticationContainer}  />
         <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const AuthenticationStack = createStackNavigator<AuthenticationStackParamList>();

export  function AuthenticationNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthenticationContainer" component={AuthenticationContainer}  />
    </Stack.Navigator>
  );
}

const AuthenticationLoadingStack = createStackNavigator<AuthenticationLoadingStackParamList>();


export  function AuthenticationLoadinNavigator() {
  return (
    <AuthenticationLoadingStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationLoadingStack.Screen name="AuthenticationLoading" component={AuthenticationLoading}  />
    </AuthenticationLoadingStack.Navigator>
  );
}


const MySwitchNavigator = createSwitchNavigator(
  {
    
  AuthLoading: AuthenticationLoadinNavigator,
  Auth: AuthenticationNavigator,
  Root: RootNavigator,
  },
  {
  initialRouteName:'AuthLoading'
  }


);