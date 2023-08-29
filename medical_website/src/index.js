import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"

// brand colors

const colors = {
  brandGreen: "#056c5f",
  brandOrange: "#f28a5d",
  brandDarkGreen: "#004b42"
}


const theme = extendTheme({colors})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
