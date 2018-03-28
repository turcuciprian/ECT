import React, {Component} from "react";
import EctDateTime from './EctDateTime.jsx';
import EctSlider from './slider.jsx';

import {UnmountClosed} from 'react-collapse';

class MoreOptions extends Component {
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
  render() {
    return (
      <div className="moreOptions">
        <span className="expand" onClick={() => this.expCol()}>
          More Features</span>
        <UnmountClosed isOpened={!this.state.collapsed}>

            <EctSlider type="numbers"/>
            <EctSlider type="texts"/>
        </UnmountClosed>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, newCustomTexts: state.newCustomTexts};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectDate: selectDate,
    changeCustomText: changeCustomText
  }, dispatch);
}

export default MoreOptions;
