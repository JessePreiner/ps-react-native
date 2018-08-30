
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Constants, WebBrowser } from 'expo';


import { NewsItem } from './NewsItem';
import { listEvents } from '../reducers/eventReducer';

class EventList extends Component {
  componentDidMount() {
    this.props.listEvents();
  }
  
  handleLinkClick = (link) => {
    Linking.openURL(link).catch(console.error);
  }
  
  renderItem = (item) => {
    return (
        <NewsItem press={() => this.handleLinkClick(item.item.link)} date={item.item.date} title={item.item.title.rendered} />
    )
  }
  
  
  render() {
    const { events, loading } = this.props;
    return loading ? (
      <Text>Loading...</Text>
    ) : (
      <FlatList
        styles={styles.container}
        data={events}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  
  let storedEvents = state.events.map(event => ({ key: '' + event.id, ...event }));
  return {
    events: storedEvents,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  listEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
