import axios from "axios";
import { authenticationService } from "../actionServices/AuthenticationService";

class ApiHandler {
    constructor() {
        this.instance = axios.create();
        this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
    }
    authHeader = () => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user && user.token) {
            return {
                Authorization: 'Bearer ' + user.token, 
                'Access-Control-Allow-Origin': '*',
                'Content-Type' : 'application/json'
            };
        } else {
            return {};
        }
    }
    handleError = (error) => {
        debugger
        if(!error.ok) {
            if([401].indexOf(error.response.status) !== -1){
                authenticationService.logout();
            }
        }
        return Promise.reject(error);
    }
    handleSuccess = (res) => {
        return res;
    }
    get = (url) => {
        return this.instance.get(url, { headers: this.authHeader() });
    }
    post = (url, data) => {
        debugger
        return this.instance.post(url, data, { headers: this.authHeader() });
    }
    put = (url, data) => {
        return this.instance.put(url, data);
    }
    put = (url) => {
        return this.instance.delete(url);
    }
}
export default new ApiHandler();