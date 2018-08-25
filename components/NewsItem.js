import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-elements';
import Moment from 'moment';

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

export const NewsItem = (props) => {
  let {date, title, press} = props;

  function getNiceDate(date) {
    return Moment(date).format('MMM D, YYYY @ h:mmA');
  }
  
  return (
    <TouchableOpacity onPress={press}>
        <Card style={styles.item} title={title}>
          <Text style={{fontSize: 12, textAlign:'center'}}>{getNiceDate(date)}</Text>
        </Card>
    </TouchableOpacity>
  );
}

