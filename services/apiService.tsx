import axios from "axios";
import { env } from "../environment/environment";
import { USER } from "../types/user";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const headers = {
  "Content-Type": "application/json",
};
export class ApiService {
  static async createUser(data: USER) {
    return axios
      .post(`${API_BASE_URL}/${env.endPoints.USER}`, data, { headers: headers })
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async editUser(data: USER) {
    return axios
      .put(`${API_BASE_URL}/${env.endPoints.USER}/${data.id}`, data, { headers: headers })
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async listUsers() {
    return axios
      .get(`${API_BASE_URL}/${env.endPoints.USER}`)
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
  static async deleteUser(data: USER) {
    return axios
      .delete(`${API_BASE_URL}/${env.endPoints.USER}/${data.id}`)
      .then(function (success) {
        return { success: success };
      })
      .catch(function (error) {
        return { error: error };
      });
  }
}
