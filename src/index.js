import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import {Store} from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={Store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
