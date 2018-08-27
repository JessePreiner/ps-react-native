import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import standingsReducer from '../reducers/standingsReducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import StandingsTable from '../components/StandingsTable';


const client = axios.create({
    responseType: 'json',
  });

const standingsStore = createStore(
    standingsReducer,
    applyMiddleware(axiosMiddleware(client))
  );

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

  export default Standings;