
import React, { Component } from 'react';
import { Table, Row } from 'react-native-table-component';
import { View, Text, StyleSheet,  ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { listStandings } from '../reducers/standingsReducer';

class StandingsTable extends Component {
  componentDidMount() {
    this.props.listStandings();
  }

  render() {
    let { standings } = this.props;
    let columnWidths = [200,20,20,20,30,25];
    return (
      standings && standings.length ?
      
      <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View> 
          <Table borderStyle={{borderColor: '#C1C0B9'}}>
            <Row data={["Team", "Wins", "Losses", "Draws", "Goal Diff",  "Position"]} widthArr={columnWidths} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              {
                standings.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData.slice(1)}
                    widthArr={columnWidths}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
     : <Text>Loading...</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});

const mapStateToProps = state => {
  return {
    standings: state.standings
  };
};

const mapDispatchToProps = {
  listStandings
};

export default connect(mapStateToProps, mapDispatchToProps)(StandingsTable);
