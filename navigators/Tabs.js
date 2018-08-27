import { createBottomTabNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/MaterialIcons';
import React, { Component } from 'react';
import Announcements from '../components/Announcements';
import Schedule from '../components/Schedule';
import Standings from '../components/Standings';

const Navigation2 = createBottomTabNavigator(
  {
    Announcements: () => <Announcements />,
    Schedule: () => <Schedule />,
    Standings: () => <Standings />
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Announcements") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Schedule") {
          iconName = `ios-clock${focused ? "" : "-outline"}`;
        } else if (routeName === "Standings") {
          iconName = `ios-podium${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      style: {
        backgroundColor: "#fff"
      },
      activeTintColor: "#4c9dec",
      inactiveTintColor: "#4c9dec"
    }
  }
);

export default Navigation2;
