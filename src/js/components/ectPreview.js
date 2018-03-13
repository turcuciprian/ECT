import React, { Component} from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import EctPreviewCont from '../containers/ectPreview';

class EctPreview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
                    <EctPreviewCont />
                )
    }
}
export default EctPreview;