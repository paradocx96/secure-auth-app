import axios from "axios";
import Connection from "./connection.json"

class UserService {

    // User Sign In
    login(data) {
        return axios.post(
            Connection.remoteAddress + "sign-in", data).then(response => {

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    // User Sign Up
    register(user) {
        return axios.post(
            Connection.remoteAddress + "sign-up", user
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
