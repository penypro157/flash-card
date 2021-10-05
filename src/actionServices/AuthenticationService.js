import axios from "axios";
import { API_URL } from "../constants/config"
import { sleep } from "../utils/JsExtentions"
const loginUrl = 'api/authentication/login'
var currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
const login = (username, password) => {
    return sleep(1000).then(() => axios.post(`${API_URL}/${loginUrl}`, { username, password }).then(result => {
        localStorage.setItem('currentUser', JSON.stringify(result.data));
        return result.data;
    }))
}
const logout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload(true);
}
export const authenticationService = {
    login,
    currentUser,
    logout
}