import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './scenes/Weather';//chama o index, pode ser './scenes/Weather/index' mas nao tem necessidade.

ReactDOM.render(
  <React.StrictMode>
    <Weather/>
  </React.StrictMode>,
  document.getElementById('root')
);