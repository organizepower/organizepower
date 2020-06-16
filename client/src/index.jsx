import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/styles.css';

import App from './components/App.jsx';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
