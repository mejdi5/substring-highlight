import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from "react-highlight-words";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App Highlighter={Highlighter}/>
  </React.StrictMode>,
  document.getElementById('root')
);


