import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EctDateTime from './EctDateTime.jsx';
import EctSlider from './slider.jsx';
import EctColorPicker from './colorPicker.jsx';

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
    if (this.props.dateTimeSel) {
      console.log('test');
      
      return (
        <div className="moreOptions">
          <span className="expand" onClick={() => this.expCol()}>
            More Features</span>
          <UnmountClosed isOpened={!this.state.collapsed}>
            <h2>Numbers(ex: 0,1,2,3...)</h2>
            <EctSlider type="numbers"/>
            <EctColorPicker type="numbers" />
            <h2>Numbers Text (Year, Month,...)</h2>
            <EctSlider type="texts"/>
            <EctColorPicker type="texts" />
          </UnmountClosed>
        </div>

      );
    } else {
      return false;
    }
  }
}
function mapStateToProps(state) {
  return {dateTimeSel: state.dateTimeSel, newCustomTexts: state.newCustomTexts};
}

export default connect(mapStateToProps)(MoreOptions);
