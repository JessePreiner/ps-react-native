import { Button } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
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
          <Text>Choose a league</Text>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => {
                this.props.navigation.navigate('Tabs', { sport: 'soccer' });
              }}>
              <ImageBackground resizeMode="cover" style={styles.backgroundImage}  source={require('../assets/card-images/soccer-drone-1000x500.jpg')}>
                <Text>Soccer</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>          
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => {
                this.props.navigation.navigate('Tabs', { sport: 'dodgeball' });
              }}>
              <ImageBackground  resizeMode="cover" style={styles.backgroundImage}  source={require('../assets/card-images/fp-second-1000x500.jpg')}>
                <Text>Dodgeball</Text>
              </ImageBackground>          
            </TouchableOpacity>
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
  card: {
    flex: 1
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  }
});

export default HomeScreen;
