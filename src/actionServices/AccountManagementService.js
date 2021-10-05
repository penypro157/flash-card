import { API_URL } from "../constants/config"
import { sleep } from "../utils/JsExtentions"
import ApiHandler from "../utils/ApiHandler"
const singupUrl = 'api/authentication/register'
const register = (username, password) => {
    return sleep(1000).then(() => ApiHandler.post(`${API_URL}/${singupUrl}`, { username, password }));
}
export const AccountManagementService = {
    register
}