import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import EctPreviewCont from './containers/ectPreview.jsx';
import EctDatePickerCont from './containers/dateTimeComp.jsx';
import EctLayouts from './components/EctLayouts.jsx';
import EctButtons from './containers/EctButtons.jsx';
import MoreOptions from './containers/moreOptions.jsx';

import {UnmountClosed} from 'react-collapse';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }

  }

  showComponents() {
    if (isOnlyPreview) {
      return (
        <div>
          <EctPreviewCont parentKey={this.props.parentKey}/>
        </div>
      );
    } else {
      return (
        <div>
          <EctPreviewCont/>
          <EctDatePickerCont/>
          <EctLayouts/>
          <MuiThemeProvider>
            <MoreOptions/>
          </MuiThemeProvider>

          <EctButtons/>
        </div>
      )
    }
  }
  render() {
    console.log(ectProperties);
    
    const logger = createLogger();
    const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));
    return (
      <Provider store={store}>
        {this.showComponents()}
      </Provider>
    )
  }
}
if (typeof ectProperties != "undefined") 
  ectProperties.forEach(function (eachTimer) {
    for (var key in eachTimer) {
      ReactDOM.render(
        <MainComponent parentKey={key}/>, document.getElementById(key));
    }
  });