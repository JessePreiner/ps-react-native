import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import eventReducer from '../reducers/eventReducer';
import EventList from '../components/EventList';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';

class Schedule extends React.Component {
    
    render() {
      const {sport} = this.props.screenProps;

      const client = axios.create({
          responseType: 'json',
          baseURL: `https://${sport}.playsask.com`    
        });

      const eventStore = createStore(
          eventReducer,
          applyMiddleware(axiosMiddleware(client))
        );
      return (
        <View style={styles.container}>
          <Text style={styles.header}>{sport} Schedule</Text>
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