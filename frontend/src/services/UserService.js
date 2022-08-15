import BaseService, { REQUEST_TYPE } from "./BaseService"

export default class UserService {
  static async userAuthentication (username, password) {
    const apiUrl = '/user/authentication'
    const body = {
      username,
      password
    }
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, null, body)
  }
}