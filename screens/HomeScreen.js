import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, ReactPropTypes } from 'react-native';
import { Tabs } from '../navigators/Tabs';

class HomeScreen extends React.Component {

  static navigationOptions = {
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>What's your thrill?</Text>
          <View style={styles.container}>
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => {
                this.props.navigation.navigate('Tabs', { sport: 'soccer', name: "Soccer" });
              }}>
              <ImageBackground resizeMode="cover" style={styles.backgroundImage}  source={require('../assets/card-images/soccer-drone-1000x500.jpg')}>
                <Text style={styles.imageText}>Soccer</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => {
                this.props.navigation.navigate('Tabs', { sport: 'dodgeball', name: "Dodgeball" });
              }}>
              <ImageBackground  resizeMode="cover" style={styles.backgroundImage} source={require('../assets/card-images/fp-second-1000x500.jpg')}>
                <Text style={styles.imageText}>Dodgeball</Text>
              </ImageBackground>
            </TouchableOpacity>
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
  imageText: {
      color: 'white',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: 'black',
      textShadowOffset: {
          width: 2,
          height: 2
      },
      marginTop: '10%',
      textShadowRadius: 10
  },
  backgroundImage: { flex:1, width: Dimensions.get('window').width, height: 300 },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
