import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(e) => this.setState({ status: e })}
          thumbColor="#ff0000"
        />
        <Text style={styles.textSwitch}>
          {
            this.state.status ?
              'True'
              :
              'False'
          }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
  },
  textSwitch: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10
  }

})