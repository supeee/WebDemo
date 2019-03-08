import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Asiakaslista from './Asiakaslista';
import Navigaatio from './Navigaatio';
import LähetysNappi from './LähetysNappi';

ReactDOM.render(
    <div>
        <Navigaatio />
        <Asiakaslista />
        <LähetysNappi />
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
