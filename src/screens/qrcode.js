import React, {Component} from 'react'


import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class HelloWorld extends Component {
  state = {
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={'http://facebook.github.io/react-native/'}
          size={Dimensions.get('screen').width * .9}
          bgColor='#000'
          fgColor='#fff'/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('main', () => HelloWorld);

module.exports = HelloWorld;