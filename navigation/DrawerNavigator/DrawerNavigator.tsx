import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import DrawerContent from './DrawerContent'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import NotFoundScreen from '../../screens/Home/Home';
import TabOneScreen from '../../screens/QRCode/QrCodeGenerator';
import TabTwoScreen from '../../screens/QRCode/QRCodeScanner';
import { BottomTabParamList, TabOneParamList, TabTwoParamList ,HomeParamList} from '../../types';
import BottomTabNavigator from '../BottomTabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthenticationContainer from '../../screens/Authentication/AuthenticationContainer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}
      >
        <Drawer.Screen name="HomeDrawer" component={BottomTabNavigator} />
        <Drawer.Screen
         name="TabOneScreen"
         component={TabOneScreen}/>
         
         <Drawer.Screen
         name="TabTwoScreen"
        component={TabTwoScreen}/>

         <Drawer.Screen
         name="AuthenticationContainer"
        component={AuthenticationContainer}/>
      
      
      
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

