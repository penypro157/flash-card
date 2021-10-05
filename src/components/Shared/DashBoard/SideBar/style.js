export const style = (theme) => {
    console.log(theme)
    return ({
        menuLinkActive: {
            '&>div': {
                backgroundColor: theme.palette.action.selected
            }
        },
        menuLink: {
            textDecoration: 'none',
            color: theme.palette.text.primary
        }
    })
}