import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IconGoogle} from '../../../resource/icons';
import {withGlobalContext} from '../../../GlobalContextProvider';

import AuthenticationBusiness from '../../../business/authentication/AuthenticationBusiness';

import {DATA_STATUS} from '../../../utils/configs';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        status: DATA_STATUS.NONE,
        data: {},
      },
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.userInfo.status !== prevState.userInfo.status &&
      this.state.userInfo.status == DATA_STATUS.SUCCESS
    ) {
      this.props.navigation.navigate('DrawerNavigation', {
        screen: 'BottomTab',
        params: {
          screen: 'DashboardStack',
          params: {
            screen: 'DashboardScreen',
            params: {
              title: 'Dashboard',
              userInfo: this.state.userInfo.data,
            },
          },
        },
      });
    }
  }

  onPressLogin = () => {
    this.props.global.setSignin();
  };

  onPressLoginWithGoogle = async () => {
    try {
      const authenticationBusiness = new AuthenticationBusiness();
      let data = await authenticationBusiness.loginGoogle();
      this.props.global.setSignin();
      this.setState({
        userInfo: data,
      });
    } catch (error) {
      this.setState({
        userInfo: error,
      });
    }
  };

  onPressResetPassword = () => {
    this.props.navigation.navigate('ChangePasswordScreen');
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginVertical: 10}}>This is Login Screen</Text>
        <TouchableOpacity style={{padding: 10}} onPress={this.onPressLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={this.onPressLoginWithGoogle}>
          <Text>
            <IconGoogle /> Login with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={this.onPressResetPassword}>
          <Text>Reset password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withGlobalContext(LoginScreen);
