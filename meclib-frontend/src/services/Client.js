import { Axios } from "../axios/axios";

class Client {
  async post(url, payload) {
    return await Axios.post(url, payload);
  }
  async get(url, payload) {
    return await Axios.get(url, payload);
  }
}


export default new Client()