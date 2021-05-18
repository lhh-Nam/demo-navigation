import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import {IconTachometer, IconAddressBook} from '../../../resource/icons';

class DrawerBody extends React.PureComponent {
  onGoToDashboard = () => {
    this.props.navigation.navigate('DashboardScreen', {
      title: 'Dashboard',
    });
  };

  onGoToContacts = () => {
    this.props.navigation.navigate('ContactScreen', {
      title: 'Contacts',
    });
  };

  render() {
    return (
      <View style={{flex: 7}}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={this.onGoToDashboard}>
          <Text style={styles.itemText}>
            <IconTachometer size={16} /> Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={this.onGoToContacts}>
          <Text style={styles.itemText}>
            <IconAddressBook size={16} />  Contacts
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(DrawerBody);

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    paddingVertical: 5,
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemText: {
    fontSize: 16,
  },
});
