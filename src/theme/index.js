import { createTheme } from '@mui/material/styles'
import { purple, green, blue, pink, lightBlue, deepPurple } from '@mui/material/colors';

const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  iconButton : {
        minWidth : 40
  }
});
export default customTheme;