import { Button } from 'react-native-elements';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from '../navigators/Tabs';

const HomeScreen = props => {
    return (
      <View style={{ marginTop: 10 }}>
        <Button
          buttonStyle={styles.button}
          textStyle={{ color: "white" }}
          title="Soccer"
          onPress={() => {
            props.navigation.navigate("Tabs");
          }}
        />
        <Button
          buttonStyle={styles.button}
          textStyle={{ color: "white" }}
          title="Dodgeball"
          onPress={() => {
            props.navigation.navigate("Tabs");
          }}
        />
      </View>
    );
  };

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

  export default HomeScreen;