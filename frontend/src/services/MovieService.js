import BaseService, { REQUEST_TYPE } from "./BaseService"

export default class MovieService {
  static async postMovie (url) {
    const apiUrl = '/movies'
    const body = {
      url
    }
    return BaseService.fetchData(REQUEST_TYPE.POST, apiUrl, null, body)
  }

  static async getAllMovies (limit = 10, offset = 0) {
    const apiUrl = '/movies'
    const query = {
      limit, offset
    }
    return BaseService.fetchData(REQUEST_TYPE.GET, apiUrl, query)
  }
}