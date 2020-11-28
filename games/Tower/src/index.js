import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const rootEl = document.getElementById('app');
console.log(rootEl);
console.log("IN INDEX>JS");
ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept();
}