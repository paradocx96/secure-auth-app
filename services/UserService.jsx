import axios from "axios";
import Connection from "./connection.json"
import config from "tailwindcss/defaultConfig";

class UserService {

    // User Sign In
    login(data) {
        return axios.post(
            Connection.remoteAddress + "login", data).then(response => {

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    // User Sign Up
    register(user) {
        return axios.post(
            Connection.remoteAddress + "register", user
        );
    }

    // Get All Users
    getAllUsers(config) {
        return axios.get(
            Connection.remoteAddress + "users",config
        );
    }

    // User Sign Out
    logout() {
        localStorage.removeItem("user");
        window.location.replace("/");
    }

    // Current User
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new UserService();
