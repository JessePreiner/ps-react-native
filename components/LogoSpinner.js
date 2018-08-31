import React, { Component } from 'react';
import { Animated, Image, Easing } from 'react-native';

const timing = 6000;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: timing,
      easing: Easing.linear,
    }).start(() => this.spin());
  }

  componentDidMount() {
    this.spin();
  }

  render() {
    const { width, height} = this.props;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.Image
          style={{
            height: height,
            width: width,
            transform: [{ rotate: spin }],
          }}
          source={require('../assets/logo-icon-blue.png')}
        />
    );
  }
}

export default Spinner;





