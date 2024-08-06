import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e2f',
      paper: '#29293d',
    },
    text: {
      primary: '#fff',
      secondary: '#aaa',
    },
  },
  typography: {
    h6: {
      color: '#fff',
    },
    h4: {
      color: '#fff',
    },
    body2: {
      color: '#fff',
    },
  },
});

export default theme;