import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import standingsReducer from '../reducers/standingsReducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import StandingsTable from '../components/StandingsTable';

class Standings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { sport, name } = this.props.screenProps;
    const client = axios.create({
      responseType: 'json',
      baseURL: `https://${sport}.playsask.com`,
    });

    const standingsStore = createStore(
      standingsReducer,
      applyMiddleware(axiosMiddleware(client))
    );

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{name} Standings</Text>
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
    backgroundColor: '#4c9dec',
  },
});

export default Standings;
