import React, { Component } from 'react';

import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Tabs from "./Tabs";
import HomeScreen from '../screens/HomeScreen';

const Navigation = createStackNavigator(
  {
    Main: { screen: HomeScreen, title: "League" },
    Tabs: ({navigation})=> (<Tabs screenProps={navigation.state.params}/>)
  },
  {
    navigationOptions: ({ navigation }) => ({
    }),
      headerTitleStyle: {
        color: "white"
      }
    }
);

export default Navigation;
