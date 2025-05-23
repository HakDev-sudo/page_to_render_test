import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
  
  // New methods for admin functionality
  getAllUsers() {
    return axios.get("http://localhost:8080/api/users", { headers: authHeader() });
  }
  
  updateUserRoles(userId, roles) {
    return axios.put(
      "http://localhost:8080/api/user-roles", 
      { userId, roles },
      { headers: authHeader() }
    );
  }
  
  deleteUser(userId) {
    return axios.delete(
      `http://localhost:8080/api/user/${userId}`, 
      { headers: authHeader() }
    );
  }
}

export default new UserService();