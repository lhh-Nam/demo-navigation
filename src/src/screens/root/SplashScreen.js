import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {withGlobalContext} from '../../GlobalContextProvider';
import LoginScreenBusiness from '../../business/LoginScreenBusiness'

const SCREEN_WIDTH = Dimensions.get('screen').width;

class SplashScreen extends React.Component {
  componentDidMount = async () => {
    const {setSplash} = this.props.global;
    const loginScreenBusiness = new LoginScreenBusiness();

    // kiểm tra đăng nhập 
    let userInfo = await loginScreenBusiness.login("giangnamtran@hhdgroup.com","123456",'xboss_uat','https://uat.xboss.com/web/session/authenticate')
    console.log("Tranning----------------->kiểm tra thông tin user sau khi login", userInfo)

     // sau khi login được thành công thì mới lấy được danh sách user ( ví dụ thêm thôi) , lấy 10 user tính từ user thứ 0 trên server
     let listUsers = await loginScreenBusiness.getListUsers([],[],0,10,"","https://uat.xboss.com/web/dataset/call_kw","search_read")
     console.log("Tranning----------------->kiểm tra thông tin listUsers sau khi login", listUsers)

    // setTimeout(() => {
    //   setSplash();
    //   this.props.navigation.navigate('Authentication', {screen: 'LoginScreen'});
    // }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../resource/images/XbossLogo.png')}
          style={{
            width: SCREEN_WIDTH - 60,
            height: 'auto',
            aspectRatio: 1667 / 512, //WIDTH/HEIGHT
          }}
        />
      </View>
    );
  }
}

export default withGlobalContext(SplashScreen);
