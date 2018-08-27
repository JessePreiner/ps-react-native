import React, { Component } from 'react';

import { createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import Navigation2 from "./Tabs";
import HomeScreen from '../screens/HomeScreen';

const Navigation = createDrawerNavigator(
  {
    Main: { screen: HomeScreen },
    Tabs: { screen: Navigation2 }
  },
  {
    navigationOptions: {
      title: "Choose a sport",
      headerStyle: {
        backgroundColor: "#4c9dec"
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
);

export default Navigation;
