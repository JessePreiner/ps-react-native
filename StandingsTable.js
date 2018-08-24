
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listStandings } from './standingsReducer';

class StandingsTable extends Component {
  componentDidMount() {
    this.props.listStandings();
  }
  
  render() {
    const { standings } = this.props;
    return (
      <View style={styles.container}>   
        <Text>{JSON.stringify(standings) }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  console.log('ssstate',state);
  return {
    standings: state
  };
};

const mapDispatchToProps = {
  listStandings
};

export default connect(mapStateToProps, mapDispatchToProps)(StandingsTable);
