import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogApp from './components/BlogApp';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config()

ReactDOM.render(<BlogApp />, document.getElementById('root'));
registerServiceWorker();
