import React, { Component} from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

class EctPreview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div>
                Live preview goes here 1.2.3
            </div>
        )
    }
}
export default EctPreview;