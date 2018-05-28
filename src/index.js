import React from 'react';
import ReactDOM from 'react-dom';
import BlogApp from './components/BlogApp';
import registerServiceWorker from './registerServiceWorker';
require('./config/dotenv').config()

ReactDOM.render(<BlogApp/>, document.getElementById('root'));
registerServiceWorker();
