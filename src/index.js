import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import './index.css';
import store from './store'
import App from "./App";


// Redux Provider needs to know all reducers it will be working with
// Also needs to keep track of actual App state
// Provider does not render. It just keeps track of state.
ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById( 'root' )
);
