import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calculator from './calculator/start';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
