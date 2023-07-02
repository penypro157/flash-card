import axios from "axios";
import { API_URL } from "../constants/config"
import { sleep } from "../utils/JsExtentions"
const loginUrl = 'api/authentication/login'
var currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
const login = (username, password) => {
    // return sleep(1000).then(() => axios.post(`${API_URL}/${loginUrl}`, { username, password }).then(result => {
    //     localStorage.setItem('currentUser', JSON.stringify(result.data));
    //     return result.data;
    // }))
     return sleep(1000).then(() => {
        localStorage.setItem('currentUser', JSON.stringify({ a : 123}));
        return { a : 123};
     })
}

const handleGooleAuthorize = async (user) => {
    return axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            console.log(res)
            return sleep(1000).then(() => {
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                return res;
             })
        })
        .catch((err) => console.log(err));
}

const logout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload(true);
}
export const authenticationService = {
    login,
    handleGooleAuthorize,
    currentUser,
    logout
}