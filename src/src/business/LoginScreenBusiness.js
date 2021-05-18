
import ResUserService from '../services/ResUserService';
import {DATA_STATUS} from '../utils/configs';

export default class LoginScreenBusiness {
  login = (userName="",password="",database="",url="") => {
    return new Promise(async (resolve, reject) => {
      const resUserService = new ResUserService();
      let userInfo = await resUserService.login(userName,password,database,url)
      if (userInfo.status == DATA_STATUS.SUCCESS) {
          // có thể xử lý custom data cho gọn , đẹp rồi hãy trả về View.
        resolve(userInfo)
      } else {
        reject(userInfo);
      }
    });
  };


// domain : là điều kiện lọc , nếu [] là không lọc.
// fields : là danh sách các fields cần lấy , nếu [] là lấy hết.
// offset : vị trí bắt đâu lấy trên server.
// limit : số lượng phần tử cần lấy.
// orderBy : sấp xếp DESC , ASC theo 1 hay nhiều field chọn lựa.
// url : địa chỉ url
// method : tên function cần server thực hiện (vì đây là JsonRPC)

  getListUsers = (domain =[],fields=[],offset=0,limit=0,orderBy="",url="",method="") => {
    return new Promise(async (resolve, reject) => {
      const resUserService = new ResUserService();
      let users = await resUserService.listUsers(domain,fields,offset,limit,orderBy,url,method)
      if (users.status == DATA_STATUS.SUCCESS) {
          // có thể xử lý custom data cho gọn , đẹp rồi hãy trả về View.
        resolve(users)
      } else {
        reject(users);
      }
    });
  };
}

