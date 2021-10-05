import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useMemo } from "react";
import { Field } from "redux-form";
const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}
export const RenderTextField = (props) => {
    var {
        label,
        input,
        meta: { touched, invalid, error, warning },
        ...custom
    } = props;
    const textField = useMemo(() => (
        <div>
            <TextField
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={touched && (error || warning)}
                multiline
                {...input}
                {...custom}
            />
        </div>
    ), [props]);
    return (
        textField
    )
}
export const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)
export const radioButton = ({ input, ...rest }) => (
    <FormControl>
        <RadioGroup {...input} {...rest}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
)
export const renderSelectField = (props) => {
    var {
        input,
        label,
        meta: { touched, error },
        children,
        ...custom
    } = props;
    var x =
        (<div>
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <Select
                native
                {...input}
                {...custom}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple'
                }}
            >
                {children}
            </Select>
            {renderFromHelper({ touched, error })}
        </div>
        )
    return x;
}
export const renderArrayTextField = (props) => {
    var {
        fields
    } = props;
    fields.forEach((item) => console.log(item));
    return (
        <div>
            <Button onClick={() => fields.push({})} color="primary" variant="contained" >Add New Field
            </Button>
            {fields.map((item, index) =>
            (
                <Field key={index} component={RenderTextField} label="Name" name={`${item}.test`} />
            ))}
        </div>
    )
}