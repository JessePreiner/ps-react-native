import { Button } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from '../navigators/Tabs';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'League',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch'}}>
        
        <Button
          buttonStyle={styles.button}
          textStyle={{ color: 'white' }}
          title="Soccer"
          onPress={() => {
            this.props.navigation.navigate('Tabs', { sport: 'soccer' });
          }}
        />
        <Button
          buttonStyle={styles.button}
          textStyle={{ color: 'white' }}
          title="Dodgeball"
          onPress={() => {
            this.props.navigation.navigate('Tabs', { sport: 'dodgeball' });
          }}
        />
        </View>
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
  button: {
    margin: 5,
    backgroundColor: '#4c9dec',
  },
});

export default HomeScreen;
