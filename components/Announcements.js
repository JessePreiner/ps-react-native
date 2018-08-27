import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import announcementReducer from '../reducers/announcementReducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import AnnouncementList from '../components/AnnouncementList';

const client = axios.create({
    responseType: 'json',
  });

const announcementsStore = createStore(
    announcementReducer,
    applyMiddleware(axiosMiddleware(client))
  );

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

  export default Announcements;