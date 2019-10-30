/* eslint-disable */

import jquery from 'jquery';
window.$ = window.jQuery=jquery;

import React from 'react';
import ReactDom from 'react-dom';

import {App} from './component/App';
import {HashRouter} from 'react-router-dom';

ReactDom.render((
    <HashRouter>
      <App />
    </HashRouter>
), document.getElementById('root'));  