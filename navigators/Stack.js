import React, { Component } from 'react';

import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Tabs from "./Tabs";
import HomeScreen from '../screens/HomeScreen';

const Navigation = createSwitchNavigator(
  {
    Main: { screen: HomeScreen},
    Tabs: ({navigation})=> (<Tabs screenProps={navigation.state.params}/>)
  },
  {
    backBehavior: "initialRoute"
  }
);

export default Navigation;
