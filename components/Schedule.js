import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import eventReducer from '../reducers/eventReducer';
import EventList from '../components/EventList';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';

const client = axios.create({
    responseType: 'json',
  });

const eventStore = createStore(
    eventReducer,
    applyMiddleware(axiosMiddleware(client))
  );

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
    button: {
      margin: 5,
      backgroundColor: '#4c9dec'
    }
  });

  export default Schedule;