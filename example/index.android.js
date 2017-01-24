import React, { Component } from 'react';
import { AppRegistry, Button, Image, Text, View } from 'react-native';

import FilePicker from 'react-native-file-picker';

export default class RNFPExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: {uri: ''},
      log: '',
    };
  }
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            FilePicker.pickDocument('image/*')
              .then((uri) => {
                Image.getSize(uri, (width, height) => {
                  this.setState({
                    imageUri: {uri, width, height},
                    log: `imageUri: ${uri}`,
                  });
                });
              })
              .catch((e) => {
                this.setState({
                  log: `error: ${e}`,
                });
              });
          }}
          title="open"
        />
        <Text>{this.state.log}</Text>
        {this.state.imageUri.uri !== '' && <Image source={this.state.imageUri} />}
      </View>
    );
  }
}

AppRegistry.registerComponent('RNFPExample', () => RNFPExample);
