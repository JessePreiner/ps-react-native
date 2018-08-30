import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Announcements from '../components/Announcements';
import Schedule from '../components/Schedule';
import Standings from '../components/Standings';

class Tabs extends React.Component {
  static navigationOptions = {
  };
  constructor(props) {
    super(props);
  }

  render() {
    const TabNavigator = createBottomTabNavigator(
      {
        Announcements: {
          screen: Announcements,
        },
        Schedule: {
          screen: Schedule,
        },
        Standings: {
          screen: Standings,
        },
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Announcements') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Schedule') {
              iconName = `ios-clock${focused ? '' : '-outline'}`;
            } else if (routeName === 'Standings') {
              iconName = `ios-podium${focused ? '' : '-outline'}`;
            }
            return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          style: {
            backgroundColor: '#fff',
          },
          activeTintColor: '#4c9dec',
          inactiveTintColor: '#4c9dec',
        },
      }
    );
    return (<TabNavigator screenProps={this.props.screenProps}/>);
  }
}

export default Tabs;
