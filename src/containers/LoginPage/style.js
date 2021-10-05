export const style = (theme) => {
    console.log(theme);
    return {
        container: {
            background: theme.palette.primary.main,
            width: '100%',
            height: '100%',
            position: 'fixed'
        },
        form: {
            marginTop: '10%'
        },
        title: {
            marginBottom : 10
        },
        button : {
            margin: '0 auto'
        }
    }
}