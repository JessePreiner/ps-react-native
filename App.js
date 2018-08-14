import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <Navigation />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}


const Home = (props) => <View>
  {/* <Text>Home</Text>
  <Text onPress={() => props.navigation.navigate('Page2')}>Go to page 2</Text> */}
</View>

const Page2 = (props) => <View>
  {/* <Text>Page2</Text>
  <Text onPress={() => props.navigation.navigate('Home')}>Go Home</Text> */}
</View>

const Navigation = createBottomTabNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
