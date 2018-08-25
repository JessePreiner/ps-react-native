import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';

import { NewsItem } from './NewsItem';
import { listAnnouncements } from '../reducers/announcementReducer';

class AnnouncementList extends Component {
  componentDidMount() {
    this.props.listAnnouncements();
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
    const { announcements, loading } = this.props;
    return announcements.length ? (
      <FlatList
        styles={styles.container}
        data={announcements}
        renderItem={this.renderItem}
      />
    ) : loading ? (
      <Text>Loading...</Text>
    ) : (
      <Text>There are no announcements!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = state => {
  let storedAnnouncements = state.announcements.map(announcement => ({
    key: '' + announcement.id,
    ...announcement,
  }));
  return {
    announcements: storedAnnouncements,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  listAnnouncements,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementList);
