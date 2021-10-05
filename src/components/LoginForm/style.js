export const style = (theme) => {
    return {
        formItem: {
            '&>div': {
                marginTop: 10
            }
        },
        button: {
            '&>button': {
                marginTop: 10
            },
            display : 'flex',
            justifyContent : 'center'
        },
        error: {
            '&>strong': {
                marginTop: 10,
                color : theme.palette.error.main
            },
            display : 'flex',
            justifyContent : 'center'
        },
    }
}