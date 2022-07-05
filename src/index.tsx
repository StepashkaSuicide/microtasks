import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createTheme';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';


const theme = createTheme({
    palette: {
        primary: yellow,
        secondary: grey,
        type: 'light'

    }
})

ReactDOM.render(
    <ThemeProvider  theme={theme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>,

    document.getElementById('root'));
 // App()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
