
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { listAnnouncements } from './announcementReducer';
import { Card } from 'react-native-elements';
import Moment from 'moment';
import { WebView } from 'react-native-gesture-handler';

class Details extends Component {
  
  render() {
    console.log('holy fuck we\'re rendering!');
    return (<WebView source={{uri: this.props.uri}} 
      style={{marginTop:20}}></WebView>);
  }
}

class AnnouncementList extends Component {
  state = {showDetails: false, source: ''};
  componentDidMount() {
    this.props.listAnnouncements();
  }
  renderItem = ({ item }) => {
  return 
  this.state.showDetails 
  ? <Details uri={item.guid.rendered}></Details>
  :
    <View style={styles.item}>
      <Card style={{fontSize: 14}} title={item.title.rendered}>
        <Text
          onPress={() => {
            console.log(this.state);
            this.setState({showDetails: true, source: item.guid.rendered});
            console.log(this.state);

          }}
          style={{fontSize: 12, textAlign:'center'}}>
        {this.getNiceDate(item.date)}</Text>
      </Card>
    </View>
  };

  getNiceDate(date) {
    return Moment(date).format('MMM d, YYYY @ h:mmA');
  }
  
  render() {
    const { announcements,loading } = this.props;
    return (announcements.length ?
      <FlatList
        styles={styles.container}
        data={announcements}
        renderItem={this.renderItem}
      />
      : loading ? <Text>Loading...</Text> :<Text>There are no announcements!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {  
  let storedAnnouncements = state.announcements.map(announcement => ({ key: '' + announcement.id, ...announcement }));
  return {
    announcements: storedAnnouncements,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  listAnnouncements
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementList);
