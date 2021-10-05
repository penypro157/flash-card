import { blue, blueGrey, grey, orange, purple } from "@mui/material/colors";

export const style = (theme) => {
    console.log(theme);
    return {
        actionButton : {
            marginRight : 10
        },
        total : {
            color : blueGrey[500]
        },
        courseContainer : {
            flexDirection : 'row'
        },
        courseTitle : {
            color: orange[500]
        },
        setTitle : {
            color: grey[500]
        },
        formItem: {
            marginTop: 10
        },
        button: {
            '&>button': {
                marginTop: 10
            },
            display: 'flex',
            justifyContent: 'center'
        },
        error: {
            '&>strong': {
                marginTop: 10,
                color: theme.palette.error.main
            },
            display: 'flex',
            justifyContent: 'center'
        },
        flashCardEditPanel : {
            marginTop : 20
        },
        flashCardItem : {
            display : 'flex',
            '&>button': {
                marginLeft: 10
            },
        },
        bottomButton: {
            marginTop : 50
        },
    }
}