import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import eventReducer from './reducers/eventReducer';
import standingsReducer from './reducers/standingsReducer';
import announcementReducer from './reducers/announcementReducer';
import EventList from './components/EventList';
import StandingsTable from './components/StandingsTable';
import AnnouncementList from './components/AnnouncementList';

const client = axios.create({
  responseType: 'json',
});

const eventStore = createStore(
  eventReducer,
  applyMiddleware(axiosMiddleware(client))
);
const standingsStore = createStore(
  standingsReducer,
  applyMiddleware(axiosMiddleware(client))
);
const announcementsStore = createStore(
  announcementReducer,
  applyMiddleware(axiosMiddleware(client))
);

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}

class Announcements extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Play Sask Announcements</Text>
        <Provider store={announcementsStore}>
          <AnnouncementList />
        </Provider>
      </View>
    );
  }
}

class Standings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Soccer Standings</Text>
        <Provider store={standingsStore}>
          <StandingsTable />
        </Provider>
      </View>
    );
  }
}

class Schedule extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Soccer Schedule</Text>
        <Provider store={eventStore}>
          <EventList />
        </Provider>
      </View>
    );
  }
}

const Navigation = createBottomTabNavigator(
  {
    Announcements: Announcements,
    Schedule: () => <Schedule />,
    Standings: () => <Standings />,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Announcements') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Schedule') {
          iconName = `ios-clock${focused ? '' : '-outline'}`;
        } else if (routeName === 'Standings') {
          iconName = `ios-podium${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
        
      },
    }),
    tabBarOptions: {
      style: {
        backgroundColor:'#fff',
      },
      activeTintColor: '#4c9dec',
      inactiveTintColor: '#4c9dec',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
