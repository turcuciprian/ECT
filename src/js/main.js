import React, { Component} from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import EctPreview from './components/ectPreview';

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <Provider store = {store}>
                <EctPreview />
            </Provider>
        )
    }
}
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
if (typeof ectProperties != "undefined")
    ectProperties.forEach(function (eachTimer) {
        for (var key in eachTimer) {
            ReactDOM.render( <MainComponent parentID = {key} />,
                document.getElementById(key));
        }
    });