import { blue, grey, purple } from "@mui/material/colors";

export const style = (theme) => {
    console.log(theme);
    return {
        container: {
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 20,
            paddingBottom: 20
        },
        searchPanel: {
            marginBottom : 20,
            background : purple[500]
        },
        setListPanel: {
            flexDirection : 'column',
            paddingLeft : 50
        },
        addCourseBtn : {
            marginLeft : 'auto'
        },
        courseListPanel : {
            paddingLeft : 5,
            flexDirection : 'column',
        },
        actionButton : theme.iconButton,
        setTitle : {
            color: blue[500]
        },
    }
}