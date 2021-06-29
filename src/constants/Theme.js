import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from './colors';

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
});