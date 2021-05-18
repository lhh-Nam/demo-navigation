import AuthenticationServices from '../../services/authentication/AuthenticationServices';
import {DATA_STATUS} from '../../utils/configs';

export default class AuthenticationBusiness {
  loginGoogle = () => {
    return new Promise(async (resolve, reject) => {
      const authenticationServices = new AuthenticationServices();
      let authentication = await authenticationServices
        .loginGoogle()
        .catch((error) => {
          console.log(`Login Google catched error: `, error);
          reject(error);
        });
        console.log(authentication)
      if (authentication.status == DATA_STATUS.SUCCESS) {
        resolve({
          status: authentication.status,
          data: {
            userName: authentication.data.user.name,
            email: authentication.data.user.email,
            image: authentication.data.user.photo,
          },
        });
      } else {
        reject(authentication);
      }
    });
  };
}
