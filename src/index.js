import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createGlobalStyle } from 'styled-components'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
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
