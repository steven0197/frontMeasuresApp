import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#29b6f6'
    },
    secondary: {
      main: "#e33014"
    },
    text: {
      primary: '#29b6f6',
      secondary: "#e33014"
    }
  },
  shadows,
  typography
});

export default theme;