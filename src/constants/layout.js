export const SideBarPosition = {
    LEFT: "left",
    RIGHT: "right",
    BOTTOM: "bottom",
    TOP: "top",
}
export const ButtonType = {
    CANCEL: "CANCEL",
    SAVE: "SAVE",
    AGREE: "AGREE",
    DISAGREE: "DISAGREE",
}
export const MESSAGE_CONFIRM = {
    DELETE: `Do you want to delete !!!`,
    DELETE_CUSTOM: (customLabel) => {
        return `Do you want to delete ${customLabel} !!!`
    }

}
export const MESSAGE_TITLE = {
    DELETE_TASK: `DELETE TASK`

}
