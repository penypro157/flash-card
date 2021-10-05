import { toast } from "react-toastify";
import { MessageType } from "../constants/config";
import 'react-toastify/dist/ReactToastify.css';
export const showAlertMessage = (message = '', type) => {
    if (message !== null && message !== undefined) {
        switch (type) {
            case MessageType.INFO: {
                toast.info(message, {
                    position: toast.POSITION.TOP_RIGHT
                }); break;
            }
            case MessageType.ERROR: {
                toast.error(message, {
                    position: toast.POSITION.TOP_RIGHT
                }); break;
            }
            case MessageType.SUCCESS: {
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT
                }); break;
            }
            case MessageType.WARNING: {
                toast.warn(message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                break;
            }
            default: console.log(123);
        }
    }
}