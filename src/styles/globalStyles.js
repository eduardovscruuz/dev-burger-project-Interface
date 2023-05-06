import { createGlobalStyle } from 'styled-components'

import Background from '../assets/background.png'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
 }

 body{
   background: url('${Background}');
   backdrop-filter: blur(1.3px);
 }
`
