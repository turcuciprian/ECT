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
    this.expCol = this
      .expCol
      .bind(this);
  }

  expCol() {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
          <div className="moreOptions">
            <span className="expand" onClick={() => this.expCol()}>
              More Features</span>
            <UnmountClosed isOpened={!this.state.collapsed}>
              <div>Random contentRandom contentRandom contentRandom contentRandom
                contentRandom contentRandom contentRandom contentRandom content Random
                contentRandom contentRandom contentRandom contentRandom contentRandom
                contentRandom contentRandom contentRandom content Random contentRandom
                contentRandom contentRandom contentRandom contentRandom contentRandom
                contentRandom contentRandom content Random contentRandom contentRandom
                contentRandom contentRandom contentRandom contentRandom contentRandom
                contentRandom content Random contentRandom contentRandom contentRandom
                contentRandom contentRandom contentRandom contentRandom contentRandom content

              </div>
            </UnmountClosed>
          </div>
          <EctButtons/>
        </div>
      )
    }
  }
  render() {
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