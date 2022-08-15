import QueryString from 'query-string'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const REQUEST_TYPE = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
}

export default class BaseService {
    static async fetchData (method, apiUrl, query, body) {
      const callAPI = new Promise(async (resolve, reject) => {
        let url = API_ENDPOINT + apiUrl;
        if (method === REQUEST_TYPE.GET && query) {
          url = url + '?' + QueryString.stringify(query);
        }
        try {
          let opt = {
            method: method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          };
          if (body) {
            opt.body = JSON.stringify(body);
          }
          const response = await fetch(url, opt);
          const responJson = await response.json();
          resolve(responJson);
        } catch (error) {
          reject(error);
        }
      });
  
      // Close promise if over time
      const callTimeout = () => new Promise((resolve, reject) => setTimeout(reject, 60000, 'OVER_TIME'));
  
      return Promise.race([callAPI, callTimeout()]).then((result) => {
        return result;
      }).catch((e) => {
        return null;
      });
    }
  }