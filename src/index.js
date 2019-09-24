import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
import colors from './components/theme/colors';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${colors().grayFont}
    }

    a {
        text-decoration: none;
        color: 'blue';
        cursor: pointer;
    }

    button {
        border: none;
        cursor: pointer;
        outline: none;
    }

    input {
        text-indent: 5px;
        outline: none;
        border: none;
        :invalid:not(:placeholder-shown):not(:focus):not([type='file']):not([type='time']) {
          border-color: red;
        }
    }
    label {
      &[required] {
          &:after {
            content: ' *'
          }
        }
    }

    span.have-error {
      font-size: 0.7em;
      text-align: right;
      height:0;
    }
`

ReactDOM.render(<><GlobalStyle /><App /></>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();