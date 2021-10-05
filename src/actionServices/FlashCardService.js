import axios from "axios";
import { API_URL } from "../constants/config"
import { sleep } from "../utils/JsExtentions"
import APIHandler from './../utils/ApiHandler'
const translateUrl = 'api/TranslateAPI/Translate'
const saveFlashCardUrl = 'api/FlashCard/SaveFlashCard'
const getFlashCardBySetUrl = 'api/FlashCard/GetFlashCardBySet'
const translate = (textSource) => {
    return sleep(100).then(() => APIHandler.post(`${API_URL}/${translateUrl}`, textSource))
}
const saveFlashCard = (data) => {
    console.log(JSON.stringify(data));
    return sleep(1000).then(() => APIHandler.post(`${API_URL}/${saveFlashCardUrl}`, [...data.flashCardList]).then(res => res.data))
}
const getFlashCardBySet = (setId) => {
    return sleep(1000).then(() => APIHandler.post(`${API_URL}/${getFlashCardBySetUrl}`, setId).then(res => res.data))
}
export const flashCardService = {
    translate,
    saveFlashCard,
    getFlashCardBySet
}