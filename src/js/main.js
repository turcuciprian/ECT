import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import EctPreviewCont from './containers/ectPreview.jsx';
import EctDatePickerCont from './containers/dateTimeComp.jsx';
import EctLayouts from './containers/EctLayouts.jsx';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }
  showComponents() {
    if (isOnlyPreview) {
      return (<div>
        <EctPreviewCont parentKey={this.props.parentKey} />
      </div>);
    } else {
      return (<div>
        <EctPreviewCont/>
        <EctDatePickerCont/>
        <EctLayouts/>
      </div>)
    }
  }
  render() {
    const logger = createLogger();
    const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));
    return (<Provider store={store}>
      {this.showComponents()}
    </Provider>)
  }
}

if (typeof ectProperties != "undefined")
  ectProperties.forEach(function(eachTimer) {
    for (var key in eachTimer) {
      ReactDOM.render(<MainComponent parentKey={key}/>, document.getElementById(key));
    }
  });
