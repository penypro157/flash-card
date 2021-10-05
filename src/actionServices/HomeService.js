import axios from "axios";
import { API_URL } from "../constants/config"
import { sleep } from "../utils/JsExtentions"
import ApiHandler from "../utils/ApiHandler"
const homeUrl = 'api/Home'
const saveCourse = (course) => {
    var action = course.courseId ? 'UpdateCourse' : 'AddCourse';
    return sleep(1000).then(() =>  ApiHandler.post(`${API_URL}/${homeUrl}/${action}`, course).then(result => {
        return result.data;
    }))
}
const deleteCourse = (course) => {
    var action = 'DeleteCourse';
    return sleep(1000).then(() =>  ApiHandler.post(`${API_URL}/${homeUrl}/${action}`, {courseId : course.courseId} ).then(result => {
        return result.data;
    }))
}
const saveSetCard = (setCard) => {
    console.log(setCard)
    var action = setCard.setId ? 'UpdateSetCard' : 'AddSetCard';
    return sleep(1000).then(() =>  ApiHandler.post(`${API_URL}/${homeUrl}/${action}`, setCard).then(result => {
        return result.data;
    }))
}
const deleteSetCard = (setCard) => {
    var action = 'DeleteSetCard';
    return sleep(1000).then(() =>  ApiHandler.post(`${API_URL}/${homeUrl}/${action}`, {setId : setCard.setId} ).then(result => {
        return result.data;
    }))
}
export const homeService = {
    saveCourse,
    deleteCourse,
    saveSetCard,
    deleteSetCard
}