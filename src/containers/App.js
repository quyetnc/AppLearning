import * as React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginContainer from '../containers/Login/LoginContainer';
import HomeContainer from '../containers/Home/HomeContainer';
import RegisterComponent from '../components/Register/RegisterComponent';
import HocLucComponent from '../components/HocLuc/HocLucComponent';
import CaNhanComponent from '../components/CaNhan/CaNhanComponent';
import LichHocComponent from '../components/LichHoc/LichHocComponent';
import ProfileComponent from '../components/CaNhan/ProfileComponent';
import ChooseYear from '../components/HocLuc/ChooseYear';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

{
  /*Tất cả màn hình khai báo ở đây*/
}

const MainStackScreen = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#820014" />
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} options={{}} />
      <Stack.Screen
        name="Register"
        component={RegisterComponent}
        options={{}}
      />
      <Stack.Screen name="CaNhan" component={CaNhanComponent} options={{}} />
      <Stack.Screen name="Tab" component={MainTabScreen} options={{}} />
    </Stack.Navigator>
  </NavigationContainer>
);

{
  /*Tất cả tab navigation khai báo ở đây*/
}

const HLStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="ChooseYear">
    <Stack.Screen name="ChooseYear" component={ChooseYear} options={{}} />
    <Stack.Screen name="HocLucc" component={HocLucComponent} options={{}} />
  </Stack.Navigator>
);

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      initialRouteName="TrangChu">
      <Tab.Screen
        name="TrangChu"
        component={HomeContainer}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LichHoc"
        component={LichHocComponent}
        options={{
          tabBarLabel: 'Lịch Học',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="HocLuc"
        component={HLStack}
        options={{
          tabBarLabel: 'Học Lực',
          tabBarIcon: ({color, size}) => (
            <Icon name="book-reader" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarLabel: 'Cá Nhân',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStackScreen;
