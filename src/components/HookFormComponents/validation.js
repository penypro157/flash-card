
export const required = (values) => {
    return values ? undefined : 'Required'
}
export const maxLength = max => values => {
    return (values && values.length > max) ? `Maximum ${max} characters.` : undefined
}