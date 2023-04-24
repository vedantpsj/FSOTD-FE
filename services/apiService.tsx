import axios from "axios";
import { env } from "../environment/environment";
import { USER } from "../types/user";

export class ApiService {
  static async createUser(data: USER) {
    return axios
      .post(`${env.apiUrls.baseApiUrl}/${env.endPoints.USER.CREATE}`, data)
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async editUser(data: USER) {
    return axios
      .put(
        `${env.apiUrls.baseApiUrl}/${env.endPoints.USER.EDIT}/${data.id}`,
        data
      )
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async listUsers() {
    return axios
      .get(`${env.apiUrls.baseApiUrl}/${env.endPoints.USER.LIST}`)
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async deleteUser(data: USER) {
    return axios
      .delete(
        `${env.apiUrls.baseApiUrl}/${env.endPoints.USER.DELETE}/${data.id}`
      )
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
}
