import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

import App from './shared/App.jsx';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
