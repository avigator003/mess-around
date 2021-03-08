import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Account from '../screens/Account/Account';
import NotFoundScreen from '../screens/Home/Home';
import TabOneScreen from '../screens/QRCode/QrCodeGenerator';

import TabOneScreen1 from '../screens/QRCode/QrCodeGenerator1';
import TabTwoScreen from '../screens/QRCode/QRCodeScanner';
import { BottomTabParamList, CardParamList,AccountParamList,QRCodeParamList ,HomeParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor:"black" ,tabStyle:{backgroundColor:"white"}}}>
        <BottomTab.Screen
         name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
   
      <BottomTab.Screen
        name="Card"
        component={CardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-card-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="QRCode"
        component={QRCodeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-qr-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="people-sharp" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CardStack = createStackNavigator<CardParamList>();

function CardNavigator() {
  return (
    <CardStack.Navigator screenOptions={{ headerShown: false }}>
      <CardStack.Screen
        name="MyCard"
        component={TabOneScreen1}
        options={{ headerTitle: 'My Card' }}
      />
 </CardStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={{ headerTitle: 'Account' }}
      />
    </AccountStack.Navigator>
  );
}



const QRCodeStack = createStackNavigator<QRCodeParamList>();

function QRCodeNavigator() {
  return (
    <QRCodeStack.Navigator screenOptions={{ headerShown: false }}>
      <QRCodeStack.Screen
        name="QRCode"
        component={TabTwoScreen}

        options={{ headerTitle: 'QR Code' }}
      />
    </QRCodeStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={NotFoundScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}


