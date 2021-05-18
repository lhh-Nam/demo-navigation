import React from 'react';
import {View, Text} from 'react-native';

export default class DrawerHeader extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 2,
          borderBottomWidth: 0.5,
          borderBottomColor: '#E5E5E5',
        }}>
        <Text>User name</Text>
      </View>
    );
  }
}
