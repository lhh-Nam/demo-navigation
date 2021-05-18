
import Servies from '../services/Servies'
import { GOOGLE_CONFIGS, DATA_STATUS } from '../utils/configs';

export default class UserService extends Servies {
    modelName() {
        return 'res.users';
    }

    login(username, password, database, url) {
        return new Promise((resolve, rejects) => {
            const params = {
                db: database,
                login: username,
                password: password,
            };
            this.post(params, url).then((resService) => {
                resolve({
                     status: DATA_STATUS.SUCCESS,
                     data: resService
                })
            }).catch((rejectService) => {
                resolve({
                     status: DATA_STATUS.FAILED, 
                     error: rejectService 
                })
            })
        })
    }

    listUsers(domain,fields,offset,limit,orderBy,url,method) {
        return new Promise((resolve, rejects) => {
            const params = {
                model: this.modelName(),
                method: method,
                args: [domain, fields, offset, limit, orderBy],
                kwargs: {},
                context: {},
              };
            this.post(params, url).then((resService) => {
                resolve({
                     status: DATA_STATUS.SUCCESS,
                     data: resService
                })
            }).catch((rejectService) => {
                resolve({
                     status: DATA_STATUS.FAILED, 
                     error: rejectService 
                })
            })
        })
    }
}
